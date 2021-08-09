pipeline {
    agent any
    stages {
        stage ('Sonar Analysis') {
            environment {
                scannerHome = tool 'SONAR_SCANNER'
            }
            steps {
                withSonarQubeEnv('SONAR_LOCAL') {             
                    sh "${scannerHome}/bin/sonar-scanner -e -Dsonar.projectKey=Liver -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=fa9f3729c25471dedd0c7a3177b5ebf7ad195e6d"
                }   
            }
        }
    }
}
