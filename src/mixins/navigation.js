export default {
    methods: {
      goToHome() {
        this.$router.push('/personal-portfolio/');
      },
      goToAbout() {
        this.$router.push('/personal-portfolio/about');
      },
      goToExperience() {
        this.$router.push('/personal-portfolio/experience');
      },
      goToProjects() {
        this.$router.push('/personal-portfolio/projects');
      },
      goToResume() {
        this.$router.push('/personal-portfolio/resume');
      },
      goToMisc() {
        this.$router.push('/personal-portfolio/misc');
      }
    }
  };