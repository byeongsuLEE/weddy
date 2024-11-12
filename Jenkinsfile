
pipeline ***REMOVED***
    agent any

    environment ***REMOVED***

        // ECR
        ECR_REGISTRY = '654654308839.dkr.ecr.ap-northeast-2.amazonaws.com'
        ECR_CREDENTIALS = 'ecr:ap-northeast-2:ECR'

        // Docker Hub
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials') // Docker Hub 자격 증명

        // Mattermost 알림 설정
        MATTERMOST_ENDPOINT = 'https://meeting.ssafy.com/hooks/yzzezkburpdd9gcac4fdzkaguo'
        MATTERMOST_CHANNEL = 'c203-jenkins'

        // ECR 이미지 이름
        CACHE_SCHEDULER_IMAGE = 'weddy/cache_scheduler'
        GATEWAY_IMAGE = 'weddy/gateway'
        PRODUCT_IMAGE = 'weddy/product'
        SCHEDULE_IMAGE = 'weddy/schedule'
        USER_IMAGE = 'weddy/user'
        FRONTEND_IMAGE = 'weddy/frontend'

        // GitOps 저장소 주소
        GITOPS_REPO = 'git@github.com:zion0425/weddy_gitops.git' 

        // Credentials
        GITOPS_CREDENTIALS = 'gitops_pk' // Jenkins에 등록된 GitOps 배포 키의 Credential ID
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
        stage('Setup SSH') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    // GitHub의 호스트 키를 known_hosts에 추가
                    sh 'mkdir -p ~/.ssh'
                    sh 'ssh-keyscan github.com >> ~/.ssh/known_hosts'
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
                    // sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                    try ***REMOVED***
                    // ECR 레지스트리
                        docker.withRegistry("https://$***REMOVED***ECR_REGISTRY***REMOVED***", ECR_CREDENTIALS) ***REMOVED***
                            for (service in changedServices) ***REMOVED***
                                def imageName = ""
                                def dirPath = ""
                                if (service == 'frontend') ***REMOVED***
                                    imageName = FRONTEND_IMAGE
                                    dirPath = 'frontend'
                                ***REMOVED*** else if (service == 'cacheScheduler') ***REMOVED***
                                    imageName = CACHE_SCHEDULER_IMAGE
                                    dirPath = 'backend/cacheScheduler'
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
                                    // Docker 이미지 빌드
                                    // sh "docker build --no-cache -t $***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED*** ."

                                    // Docker hub에 이미지 푸시
                                    // sh "docker push $***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED***"

                                    // ECR 이미지 빌드
                                    def app = docker.build("$***REMOVED***ECR_REGISTRY***REMOVED***/$***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED***", '.')

                                    // ECR에 이미지 푸시
                                    app.push("$***REMOVED***env.BUILD_NUMBER***REMOVED***")
                                ***REMOVED***


                            ***REMOVED***
                        ***REMOVED***
                    ***REMOVED*** catch (Exception e) ***REMOVED***
                        echo "Error during build/push: $***REMOVED***e.message***REMOVED***"
                        throw e
                    ***REMOVED***
                ***REMOVED***
            ***REMOVED***
        ***REMOVED***

        stage('Update GitOps Repo') ***REMOVED***
            steps ***REMOVED***
                script ***REMOVED***
                    sshagent (credentials: [GITOPS_CREDENTIALS]) ***REMOVED***
                        dir('gitops') ***REMOVED***
                            // GitOps 저장소 클론
                            sh 'git clone -b main git@github.com:zion0425/weddy-gitops.git .'

                            for (service in changedServices) ***REMOVED***
                                def imageName = ""
                                def deploymentFile = ""

                                // 변경 사안 확인
                                def hasChanges = sh(script: 'git status --porcelain', returnStdout: true).trim()
                                if (!hasChanges) ***REMOVED***
                                    echo 'No changes to commit'
                                    return
                                ***REMOVED***

                                if (service == 'frontend') ***REMOVED***
                                    imageName = FRONTEND_IMAGE
                                    deploymentFile = 'base/frontend/deployment.yaml'
                                ***REMOVED*** else if (service == 'cacheScheduler') ***REMOVED***
                                    imageName = CACHE_SCHEDULER_IMAGE
                                    deploymentFile = 'base/cache-scheduler/deployment.yaml'
                                ***REMOVED*** else if (service == 'gateway') ***REMOVED***
                                    imageName = GATEWAY_IMAGE
                                    deploymentFile = 'base/gateway/deployment.yaml'
                                ***REMOVED*** else if (service == 'product') ***REMOVED***
                                    imageName = PRODUCT_IMAGE
                                    deploymentFile = 'base/product/deployment.yaml'
                                ***REMOVED*** else if (service == 'schedule') ***REMOVED***
                                    imageName = SCHEDULE_IMAGE
                                    deploymentFile = 'base/schedule/deployment.yaml'
                                ***REMOVED*** else if (service == 'user') ***REMOVED***
                                    imageName = USER_IMAGE
                                    deploymentFile = 'base/user/deployment.yaml'
                                ***REMOVED***

                                // deployment.yaml 파일의 이미지 태그 업데이트
                                sh """
                                sed -i 's#image: .*#image: $***REMOVED***ECR_REGISTRY***REMOVED***/$***REMOVED***imageName***REMOVED***:$***REMOVED***env.BUILD_NUMBER***REMOVED***#' $***REMOVED***deploymentFile***REMOVED***
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

