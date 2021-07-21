pipeline {
    agent any
    stages {
        stage ('Sonar Analysis') {
            environment {
                scannerHome = tool 'SONAR_SCANNER'
            }
            steps {
                withSonarQubeEnv('SONAR_LOCAL') {             
                    sh "${scannerHome}/bin/sonar-scanner -e -Dsonar.projectKey=Liver -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=1d2f6e0cf7dc5b9616d6fd4ea70e3086786245c2"
                }   
            }
        }
    }
}
