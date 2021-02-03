    const app = {
        data() {
            return {
                firstname:'Supphakit ',
                lastname:'Theppong',
                role: 'developer',
                img:'./images/profile.jpg'
            }
        }
    }
    mountedApp = Vue.createApp(app).mount('#app');