const tweenWave11 = KUTE.allFromTo(
    '#wave1-1',
    { path: '#wave11' },
    { path: '#wave12' },
    { repeat: 999, duration: 3000, yoyo: true }
).start();