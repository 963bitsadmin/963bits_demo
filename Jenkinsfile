pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/963bitsadmin/963bits_demo', branch: 'development')
      }
    }

    stage('PreBuild') {
      steps {
        sh 'cd demo_development && npm i '
      }
    }

  }
}