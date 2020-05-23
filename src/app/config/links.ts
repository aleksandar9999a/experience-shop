export class Links {
    progresbar = {
        title: 'Spinner',
        link: 'https://firebasestorage.googleapis.com/v0/b/experience-shop.appspot.com/o/progresbar.gif?alt=media&token=0c9a617a-da89-48a4-95b5-a6f8ccc6657b'
    };
    logo = {
        title: 'Logo',
        link: 'https://firebasestorage.googleapis.com/v0/b/experience-shop.appspot.com/o/logo.png?alt=media&token=5b41f820-65e7-4f73-bb31-cedf3d457558'
    };
    unknown = {
        title: 'Unknown',
        link: 'https://firebasestorage.googleapis.com/v0/b/experience-shop.appspot.com/o/unkItem.svg?alt=media&token=0367bdcb-2004-4fbd-9099-5d1f817277d4'
    };
    angular = {
        title: 'Angular',
        link: 'https://angular.io/'
    };
    firebase = {
        title: 'Firebase',
        link: 'https://github.com/angular/angularfire'
    };
    places = {
        title: 'Google Places',
        link: 'https://developers.google.com/maps/documentation/javascript/places'
    };
    notifier = {
        title: 'Angular Notifier',
        link: 'https://www.npmjs.com/package/angular-notifier'
    };
    bootstrap = {
        title: 'Bootstrap',
        link: 'https://getbootstrap.com/'
    };;
    facebook = {
        title: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100008368336139'
    };
    instagram = {
        title: 'Instagram',
        link: 'https://www.instagram.com/sandi9999a/'
    };
    linkedin = {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ak-exp/'
    };
    github = {
        title: 'Github',
        link: 'https://github.com/aleksandar9999a'
    };

    getSocialMedias() {
        return [this.facebook, this.instagram, this.linkedin, this.github];
    }

    getDependencies() {
        return [this.angular, this.firebase, this.places, this.notifier, this.bootstrap];
    }
}
