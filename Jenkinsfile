
pipeline ***REMOVED***
    agent any

    environment ***REMOVED***
        // Docker Hub
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials') // Docker Hub ?κ²? μ¦λͺ

        // Mattermost ?λ¦? ?€? 
        MATTERMOST_ENDPOINT = 'https://meeting.ssafy.com/hooks/yzzezkburpdd9gcac4fdzkaguo'
        MATTERMOST_CHANNEL = 'c203-jenkins'

        // Docker ?΄λ―Έμ? ?΄λ¦?
        CACHE_SCHEDULER_IMAGE = 'siokim002/weddy_cache_scheduler'
        COMMON_LIB_IMAGE = 'siokim002/weddy_common_lib'
        GATEWAY_IMAGE = 'siokim002/weddy_gateway'
        PRODUCT_IMAGE = 'siokim002/weddy_product'
        SCHEDULE_IMAGE = 'siokim002/weddy_schedule'
        USER_IMAGE = 'siokim002/weddy_user'
        FRONTEND_IMAGE = 'siokim002/weddy_frontend'

        // GitOps ???₯? μ£Όμ
        GITOPS_REPO = 'git@github.com:zion0425/weddy_gitops.git' 

        // Credentials
        GITOPS_CREDENTIALS = 'gitops_pk' // Jenkins? ?±λ‘λ GitOps λ°°ν¬ ?€? Credential ID
        GITLAB_CREDENTIALS = 'gitlab' // GitLab ?κ²? μ¦λͺ ID
    ***REMOVED***

    options ***REMOVED***
        buildDiscarder(logRotator(numToKeepStr: '3'))
    ***REMOVED***

    stages ***REMOVED***
        stage('Start Notification') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    sendNotification('warning', 'λΉλ ??')
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***
        stage('Setup SSH') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    // GitHub? ?Έ?€?Έ ?€λ₯? known_hosts? μΆκ?
                    sh 'mkdir -p ~/.ssh'
                    sh 'ssh-keyscan github.com >> ~/.ssh/known_hosts'
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***

        stage('Checkout') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    // ??€ μ½λ μ²΄ν¬??
                    git url: 'https://lab.ssafy.com/s11-final/S11P31C203.git', branch: 'release', credentialsId: GITLAB_CREDENTIALS

                    // λ³?κ²½λ ??Ό λͺ©λ‘ κ°?? Έ?€κΈ?
                    def changes = sh(script: "git diff --name-only HEAD~1 HEAD", returnStdout: true).trim()
                    println "Changed files:\n$***REMOVED***changes***REMOVED***"

                    // λ³?κ²½λ ?λΉμ€ ??Έ
                    changedServices = []
                    if (changes.contains('frontend/')) ***REMOVED***
                        changedServices.add('frontend')
                    ***REMOVED***
                    if (changes.contains('backend/')) ***REMOVED***
                        if (changes.contains('cacheScheduler/')) ***REMOVED***
                            changedServices.add('cacheScheduler')
                        ***REMOVED***
                        if (changes.contains('common-lib/')) ***REMOVED***
                            changedServices.add('common-lib')
                        ***REMOVED***
                        if (changes.contains('gateway/')) ***REMOVED***
                            changedServices.add('gateway')
                        ***REMOVED***
                        if (changes.contains('product/')) ***REMOVED***
                            changedServices.add('product')
                        ***REMOVED***
                        if (changes.contains('schedule/')) ***REMOVED***
                            changedServices.add('schedule')
                        ***REMOVED***
                        if (changes.contains('user/')) ***REMOVED***
                            changedServices.add('user')
                        ***REMOVED***
                    ***REMOVED***
                    println "Changed services: $***REMOVED***changedServices***REMOVED***"
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***

        stage('Build and Push Docker Images') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    // Docker Hub λ‘κ·Έ?Έ
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'

                    for (service in changedServices) ***REMOVED***
                        def imageName = ""
                        def dirPath = ""
                        if (service == 'frontend') ***REMOVED***
                            imageName = FRONTEND_IMAGE
                            dirPath = 'frontend'
                        ***REMOVED*** else if (service == 'cacheScheduler') ***REMOVED***
                            imageName = CACHE_SCHEDULER_IMAGE
                            dirPath = 'backend/cacheScheduler'
                        ***REMOVED*** else if (service == 'common-lib') ***REMOVED***
                            imageName = COMMON_LIB_IMAGE
                            dirPath = 'backend/common-lib'
                        ***REMOVED*** else if (service == 'gateway') ***REMOVED***
                            imageName = GATEWAY_IMAGE
                            dirPath = 'backend/gateway'
                        ***REMOVED*** else if (service == 'product') ***REMOVED***
                            imageName = PRODUCT_IMAGE
                            dirPath = 'backend/product'
                        ***REMOVED*** else if (service == 'schedule') ***REMOVED***
                            imageName = SCHEDULE_IMAGE
                            dirPath = 'backend/schedule'
                        ***REMOVED*** else if (service == 'user') ***REMOVED***
                            imageName = USER_IMAGE
                            dirPath = 'backend/user'
                        ***REMOVED***

                        // Docker ?΄λ―Έμ? λΉλ
                        dir(dirPath) ***REMOVED***
                            if (service != 'frontend') ***REMOVED***
                                sh 'chmod +x ./gradlew'
                                sh './gradlew clean build -x test'
                            ***REMOVED***
                            sh "docker build --no-cache -t $***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED*** ."
                        ***REMOVED***

                        // Docker ?΄λ―Έμ? ?Έ?
                        sh "docker push $***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED***"
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***

        stage('Update GitOps Repo') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    sshagent (credentials: [GITOPS_CREDENTIALS]) ***REMOVED***
                        dir('gitops') ***REMOVED***
                            // GitOps ???₯? ?΄λ‘?
                            sh 'git clone -b main git@github.com:zion0425/weddy_gitops.git .'

                            for (service in changedServices) ***REMOVED***
                                def imageName = ""
                                def deploymentFile = ""
                                if (service == 'frontend') ***REMOVED***
                                    imageName = FRONTEND_IMAGE
                                    deploymentFile = 'frontend-deployment.yaml'
                                ***REMOVED*** else if (service == 'cacheScheduler') ***REMOVED***
                                    imageName = CACHE_SCHEDULER_IMAGE
                                    deploymentFile = 'cache-scheduler-deployment.yaml'
                                ***REMOVED*** else if (service == 'common-lib') ***REMOVED***
                                    imageName = COMMON_LIB_IMAGE
                                    deploymentFile = 'common-lib-deployment.yaml'
                                ***REMOVED*** else if (service == 'gateway') ***REMOVED***
                                    imageName = GATEWAY_IMAGE
                                    deploymentFile = 'gateway-deployment.yaml'
                                ***REMOVED*** else if (service == 'product') ***REMOVED***
                                    imageName = PRODUCT_IMAGE
                                    deploymentFile = 'product-deployment.yaml'
                                ***REMOVED*** else if (service == 'schedule') ***REMOVED***
                                    imageName = SCHEDULE_IMAGE
                                    deploymentFile = 'schedule-deployment.yaml'
                                ***REMOVED*** else if (service == 'user') ***REMOVED***
                                    imageName = USER_IMAGE
                                    deploymentFile = 'user-deployment.yaml'
                                ***REMOVED***

                                // deployment.yaml ??Ό? ?΄λ―Έμ? ?κ·? ??°?΄?Έ
                                sh """
                                sed -i 's#image: .*#image: $***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED***#' $***REMOVED***deploymentFile***REMOVED***
                                """
                            ***REMOVED***

                            // λ³?κ²? ?¬?­ μ»€λ° λ°? ?Έ?
                            sh """
                            git config user.name "Jenkins"
                            git config user.email "jenkins@gitops.com"
                            git add .
                            git commit -m "Update images for services: $***REMOVED***changedServices.join(', ')***REMOVED***"
                            git push origin main
                            """
                        ***REMOVED***
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***

    post ***REMOVED***
        success ***REMOVED***
            script ***REMOVED***
                sendNotification('good', 'λΉλ ?±κ³?')
                cleanWs()
            ***REMOVED***
        ***REMOVED***
        failure ***REMOVED***
            script ***REMOVED***
                sendNotification('danger', 'λΉλ ?€?¨')
                cleanWs()
            ***REMOVED***
        ***REMOVED***
    ***REMOVED***
***REMOVED***

def sendNotification(String color, String status) ***REMOVED***
    def gitCommitterName = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
    def gitCommitMessage = sh(script: "git log -1 --pretty=%B", returnStdout: true).trim()
    
    mattermostSend(
        color: color,
        message: """$***REMOVED***status***REMOVED***: λΉλ λ²νΈ #$***REMOVED***env.BUILD_NUMBER***REMOVED***
μ»€λ° ??±?: $***REMOVED***gitCommitterName***REMOVED***
μ»€λ° λ©μμ§?: $***REMOVED***gitCommitMessage***REMOVED***
(<$***REMOVED***env.BUILD_URL***REMOVED***|λΉλ ??Έ ? λ³?>)""",
        endpoint: MATTERMOST_ENDPOINT,
        channel: MATTERMOST_CHANNEL
    )
***REMOVED***

