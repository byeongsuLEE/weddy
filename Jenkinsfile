
pipeline ***REMOVED***
    agent any

    environment ***REMOVED***
        // Docker Hub
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials') // Docker Hub 자격 증명

        // Mattermost 알림 설정
        MATTERMOST_ENDPOINT = 'https://meeting.ssafy.com/hooks/yzzezkburpdd9gcac4fdzkaguo'
        MATTERMOST_CHANNEL = 'c203-jenkins'

        // Docker 이미지 이름
        CACHE_SCHEDULER_IMAGE = 'siokim002/weddy_cache_scheduler'
        COMMON_LIB_IMAGE = 'siokim002/weddy_common_lib'
        GATEWAY_IMAGE = 'siokim002/weddy_gateway'
        PRODUCT_IMAGE = 'siokim002/weddy_product'
        SCHEDULE_IMAGE = 'siokim002/weddy_schedule'
        USER_IMAGE = 'siokim002/weddy_user'
        FRONTEND_IMAGE = 'siokim002/weddy_frontend'

        // GitOps 저장소 주소
        GITOPS_REPO = 'git@github.com:zion0425/weddy_gitops.git' 

        // Credentials
        GITOPS_CREDENTIALS = credentials('gitops_pk') // Jenkins에 등록된 GitOps 배포 키의 Credential ID
        GITLAB_CREDENTIALS = 'gitlab' // GitLab 자격 증명 ID
    ***REMOVED***

    options ***REMOVED***
        buildDiscarder(logRotator(numToKeepStr: '3'))
    ***REMOVED***

    stages ***REMOVED***
        stage('Start Notification') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    sendNotification('warning', '빌드 시작')
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***

        stage('Checkout') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    // 소스 코드 체크아웃
                    git url: 'https://lab.ssafy.com/s11-final/S11P31C203.git', branch: 'release', credentialsId: GITLAB_CREDENTIALS

                    // 변경된 파일 목록 가져오기
                    def changes = sh(script: "git diff --name-only HEAD~1 HEAD", returnStdout: true).trim()
                    println "Changed files:\n$***REMOVED***changes***REMOVED***"

                    // 변경된 서비스 확인
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
                    // Docker Hub 로그인
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

                        // Docker 이미지 빌드
                        dir(dirPath) ***REMOVED***
                            if (service != 'frontend') ***REMOVED***
                                sh 'chmod +x ./gradlew'
                                sh './gradlew clean build -x test'
                            ***REMOVED***
                            sh "docker build --no-cache -t $***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED*** ."
                        ***REMOVED***

                        // Docker 이미지 푸시
                        sh "docker push $***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED***"
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***

        stage('Update GitOps Repo') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    sshagent ([GITOPS_CREDENTIALS]) ***REMOVED***
                        dir('gitops') ***REMOVED***
                            // GitOps 저장소 클론
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

                                // deployment.yaml 파일의 이미지 태그 업데이트
                                sh """
                                sed -i 's#image: .*#image: $***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED***#' $***REMOVED***deploymentFile***REMOVED***
                                """
                            ***REMOVED***

                            // 변경 사항 커밋 및 푸시
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
                sendNotification('good', '빌드 성공')
                cleanWs()
            ***REMOVED***
        ***REMOVED***
        failure ***REMOVED***
            script ***REMOVED***
                sendNotification('danger', '빌드 실패')
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
        message: """$***REMOVED***status***REMOVED***: 빌드 번호 #$***REMOVED***env.BUILD_NUMBER***REMOVED***
커밋 작성자: $***REMOVED***gitCommitterName***REMOVED***
커밋 메시지: $***REMOVED***gitCommitMessage***REMOVED***
(<$***REMOVED***env.BUILD_URL***REMOVED***|빌드 상세 정보>)""",
        endpoint: MATTERMOST_ENDPOINT,
        channel: MATTERMOST_CHANNEL
    )
***REMOVED***

