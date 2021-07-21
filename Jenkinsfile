pipeline {
    agent any
    stages {
        stage ('Sonar Analysis') {
            environment {
                scannerHome = tool 'SONAR_SCANNER'
            }
            steps {
                withSonarQubeEnv('SONAR_LOCAL') {             
                    sh "${scannerHome}/bin/sonar-scanner -e -Dsonar.projectKey=DeployBack -Dsonar.host.url=http://localhost:9000 -Dsonar.login=779c3dc8d2d973a7fd905db7904959bacc1dc174 -Dsonar.java.binaries=target"
                }   
            }
        }
    }
}
