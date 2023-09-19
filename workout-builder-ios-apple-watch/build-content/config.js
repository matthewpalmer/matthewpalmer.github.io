const GENERIC_APP_DOWNLOAD_LINK = 'https://apps.apple.com/us/app/workout-builder-send-to-watch/id6450721774';

const config = {
    categories: [
        {
            category_page_title: 'How to create custom running workouts for Apple Watch',
            category_name: 'Running',
            category_name_lower: 'running',
            category_slug: 'structured-running-workouts-apple-watch',
            category_image: 'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3064&q=80',
            category_workout_types: 'interval, tempo, threshold, and fartlek',
            workouts: [
                {
                    workout_title: '2x15 minute tempo run',
                    workout_description: 'Tempo runs are performed at a moderate-to-hard intensity for an extended period. Build your anaerobic threshold endurance to go faster for longer.',
                    workout_cta_link: GENERIC_APP_DOWNLOAD_LINK,
                    workout_configuration: [
                        { key: 'Warmup', text: '10 minutes easy' },
                        { key: 'separator' },
                        { key: 'Work', text: '15 minute effort' },
                        { key: 'Recovery', text: '5 minute recovery' },
                        { key: 'separator' },
                        { key: 'Work', text: '15 minute effort' },
                        { key: 'Recovery', text: '5 minute recovery' },
                        { key: 'separator' },
                        { key: 'Cooldown', text: '10 minutes easy' },
                    ]
                },
                {
                    workout_title: '2x3km tempo run',
                    workout_description: 'Tempo runs are performed at a moderate-to-hard intensity for an extended period. Build your anaerobic threshold endurance to go faster for longer.',
                    workout_cta_link: GENERIC_APP_DOWNLOAD_LINK,
                    workout_configuration: [
                        { key: 'Warmup', text: '2km easy' },
                        { key: 'separator' },
                        { key: 'Work', text: '3km effort' },
                        { key: 'Recovery', text: '5 minute recovery' },
                        { key: 'separator' },
                        { key: 'Work', text: '3km effort' },
                        { key: 'Recovery', text: '5 minute recovery' },
                        { key: 'separator' },
                        { key: 'Cooldown', text: '2km easy' },
                    ]
                },
                {
                    workout_title: '5x4 minute interval run',
                    workout_description: 'Interval runs help you build speed and endurance through hard efforts split up into short periods.',
                    workout_cta_link: GENERIC_APP_DOWNLOAD_LINK,
                    workout_configuration: [
                        { key: 'Warmup', text: '10 minutes easy' },
                        { key: 'separator' },
                        { key: 'Work', text: '4 minute effort' },
                        { key: 'Recovery', text: '3 minute recovery' },
                        { key: 'Repeat', text: 'Repeat 5 times' },
                        { key: 'separator' },
                        { key: 'Cooldown', text: '10 minutes easy' },
                    ]
                },
                {
                    workout_title: '400m on/200m off intervals',
                    workout_description: 'A 400m on/200m off interval workout helps you build top-end speed for your next race.',
                    workout_cta_link: GENERIC_APP_DOWNLOAD_LINK,
                    workout_configuration: [
                        { key: 'Warmup', text: '2km easy' },
                        { key: 'separator' },
                        { key: 'Work', text: '400m on' },
                        { key: 'Recovery', text: '200m off' },
                        { key: 'Repeat', text: 'Repeat 8 times' },
                        { key: 'separator' },
                        { key: 'Cooldown', text: '2km easy' },
                    ]
                },
            ]
        },
        {
            category_page_title: 'How to create custom cycling workouts for Apple Watch',
            category_name: 'Cycling',
            category_name_lower: 'cycling',
            category_slug: 'build-custom-cycling-workouts-apple-watch',
            category_image: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80',
            category_workout_types: 'interval, climbing, pyramids, and progressive',
            workouts: [
                {
                    workout_title: '2x20 minute interval ride',
                    workout_description: 'A 2x20 minute cycling workout helps you sustain faster speeds and build your threshold pace.',
                    workout_cta_link: GENERIC_APP_DOWNLOAD_LINK,
                    workout_configuration: [
                        { key: 'Warmup', text: '10 minutes easy' },
                        { key: 'separator' },
                        { key: 'Work', text: '20 minute effort' },
                        { key: 'Recovery', text: '5 minute recovery' },
                        { key: 'separator' },
                        { key: 'Work', text: '20 minute effort' },
                        { key: 'Recovery', text: '5 minute recovery' },
                        { key: 'separator' },
                        { key: 'Cooldown', text: '10 minutes easy' },
                    ]
                },
                {
                    workout_title: '2 minute pyramid build ride',
                    workout_description: 'A challenging pyramid workout helps you build pace and endurance over a series of intervals that gradually become more difficult.',
                    workout_cta_link: GENERIC_APP_DOWNLOAD_LINK,
                    workout_configuration: [
                        { key: 'Warmup', text: '10 minutes easy' },
                        { key: 'separator' },

                        { key: 'Work', text: '2 minute effort' },
                        { key: 'Recovery', text: '2 minute recovery' },
                        { key: 'separator' },
                        
                        { key: 'Work', text: '4 minute effort' },
                        { key: 'Recovery', text: '4 minute recovery' },
                        { key: 'separator' },

                        { key: 'Work', text: '8 minute effort' },
                        { key: 'Recovery', text: '8 minute recovery' },
                        { key: 'separator' },

                        { key: 'Work', text: '4 minute effort' },
                        { key: 'Recovery', text: '4 minute recovery' },
                        { key: 'separator' },

                        { key: 'Work', text: '2 minute effort' },
                        { key: 'Recovery', text: '2 minute recovery' },
                        { key: 'separator' },

                        { key: 'Cooldown', text: '10 minutes easy' },
                    ]
                },

                {
                    workout_title: 'Progressive climbing cycling workout',
                    workout_description: 'Designed to be performed on hills, this workout builds your climbing ability through a series of longer and shorter intervals.',
                    workout_cta_link: GENERIC_APP_DOWNLOAD_LINK,
                    workout_configuration: [
                        { key: 'Warmup', text: '10 minutes easy' },
                        { key: 'separator' },

                        { key: 'Work', text: '5 minute climb' },
                        { key: 'Recovery', text: '2 minute recovery' },
                        { key: 'separator' },

                        { key: 'Work', text: '3 minute climb - moderate' },
                        { key: 'Work', text: '2 minute climb - sprint' },
                        { key: 'Recovery', text: '6 minute recovery' },
                        { key: 'separator' },

                        { key: 'Work', text: '30 second climb - sprint' },
                        { key: 'Recovery', text: '20 second recovery' },
                        { key: 'Repeat', text: 'Repeat 5 times' },
                        { key: 'separator' },

                        { key: 'Cooldown', text: '10 minutes easy' },
                    ]
                },
            ]
        }
    ]
};

module.exports = config;
