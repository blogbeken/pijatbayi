angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.akupresurMandiriV1', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/akupresurMandiriV1.html',
        controller: 'akupresurMandiriV1Ctrl'
      }
    }
  })

  .state('tabsController.tentangProgram', {
    url: '/tentang',
    views: {
      'tab3': {
        templateUrl: 'templates/tentangProgram.html',
        controller: 'tentangProgramCtrl'
      }
    }
  })

  .state('tabsController.ucapanTerimaKasih', {
    url: '/credit',
    views: {
      'tab2': {
        templateUrl: 'templates/ucapanTerimaKasih.html',
        controller: 'ucapanTerimaKasihCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('titikPenting', {
    url: '/titik-penting',
    templateUrl: 'templates/titikPenting.html',
    controller: 'titikPentingCtrl'
  })

  .state('perawatanKesehatan', {
    url: '/perawatan-kesehatan',
    templateUrl: 'templates/perawatanKesehatan.html',
    controller: 'perawatanKesehatanCtrl'
  })

  .state('muka1', {
    url: '/muka1',
    templateUrl: 'templates/muka1.html',
    controller: 'muka1Ctrl'
  })

  .state('muka3a', {
    url: '/muka3a',
    templateUrl: 'templates/muka3a.html',
    controller: 'muka3aCtrl'
  })

  .state('muka2', {
    url: '/muka2',
    templateUrl: 'templates/muka2.html',
    controller: 'muka2Ctrl'
  })

  .state('muka3b', {
    url: '/muka3b',
    templateUrl: 'templates/muka3b.html',
    controller: 'muka3bCtrl'
  })

  .state('muka4', {
    url: '/muka4',
    templateUrl: 'templates/muka4.html',
    controller: 'muka4Ctrl'
  })

  .state('muka5', {
    url: '/muka5',
    templateUrl: 'templates/muka5.html',
    controller: 'muka5Ctrl'
  })

  .state('dada1', {
    url: '/dada1',
    templateUrl: 'templates/dada1.html',
    controller: 'dada1Ctrl'
  })

  .state('dada2a', {
    url: '/dada2a',
    templateUrl: 'templates/dada2a.html',
    controller: 'dada2aCtrl'
  })

  .state('dada2b', {
    url: '/dada2b',
    templateUrl: 'templates/dada2b.html',
    controller: 'dada2bCtrl'
  })

  .state('cV17', {
    url: '/cv 17',
    templateUrl: 'templates/cV17.html',
    controller: 'cV17Ctrl'
  })

  .state('cV12', {
    url: '/cv12',
    templateUrl: 'templates/cV12.html',
    controller: 'cV12Ctrl'
  })

  .state('sI1', {
    url: '/si1',
    templateUrl: 'templates/sI1.html',
    controller: 'sI1Ctrl'
  })

  .state('lI4', {
    url: '/li4',
    templateUrl: 'templates/lI4.html',
    controller: 'lI4Ctrl'
  })

  .state('lU7', {
    url: '/lu7',
    templateUrl: 'templates/lU7.html',
    controller: 'lU7Ctrl'
  })

  .state('hT7', {
    url: '/ht7',
    templateUrl: 'templates/hT7.html',
    controller: 'hT7Ctrl'
  })

  .state('pC6', {
    url: '/pc6',
    templateUrl: 'templates/pC6.html',
    controller: 'pC6Ctrl'
  })

  .state('sJ6', {
    url: '/sj6',
    templateUrl: 'templates/sJ6.html',
    controller: 'sJ6Ctrl'
  })

  .state('lI11', {
    url: '/li11',
    templateUrl: 'templates/lI11.html',
    controller: 'lI11Ctrl'
  })

  .state('tangan1', {
    url: '/tangan1',
    templateUrl: 'templates/tangan1.html',
    controller: 'tangan1Ctrl'
  })

  .state('tangan2', {
    url: '/tangan2',
    templateUrl: 'templates/tangan2.html',
    controller: 'tangan2Ctrl'
  })

  .state('tangan3', {
    url: '/tangan3',
    templateUrl: 'templates/tangan3.html',
    controller: 'tangan3Ctrl'
  })

  .state('tangan4a', {
    url: '/tangan1',
    templateUrl: 'templates/tangan4a.html',
    controller: 'tangan4aCtrl'
  })
  .state('tangan4b', {
    url: '/tangan4b',
    templateUrl: 'templates/tangan4b.html',
    controller: 'tangan4bCtrl'
  })
  .state('tangan5a', {
    url: '/tangan5a',
    templateUrl: 'templates/tangan5a.html',
    controller: 'tangan5aCtrl'
  })
  .state('tangan5b', {
    url: '/tangan5b',
    templateUrl: 'templates/tangan5b.html',
    controller: 'tangan5bCtrl'
  })
  .state('tangan6', {
    url: '/tangan6',
    templateUrl: 'templates/tangan6.html',
    controller: 'tangan6Ctrl'
  })
  .state('tangan7a', {
    url: '/tangan7a',
    templateUrl: 'templates/tangan7a.html',
    controller: 'tangan7aCtrl'
  })
  .state('tangan7b', {
    url: '/tangan7b',
    templateUrl: 'templates/tangan7b.html',
    controller: 'tangan7bCtrl'
  })
  .state('kaki1a', {
    url: '/kaki1a',
    templateUrl: 'templates/kaki1a.html',
    controller: 'kaki1aCtrl'
  })
  .state('kaki2', {
    url: '/kaki2',
    templateUrl: 'templates/kaki2.html',
    controller: 'kaki2Ctrl'
  })
  .state('kaki3', {
    url: '/kaki3',
    templateUrl: 'templates/kaki3.html',
    controller: 'kaki3Ctrl'
  })
  .state('kaki4a', {
    url: '/kaki4a',
    templateUrl: 'templates/kaki4a.html',
    controller: 'kaki4aCtrl'
  })
  .state('kaki5', {
    url: '/kaki5',
    templateUrl: 'templates/kaki5.html',
    controller: 'kaki5Ctrl'
  })
  .state('kaki6a', {
    url: '/kaki6a',
    templateUrl: 'templates/kaki6a.html',
    controller: 'kaki6aCtrl'
  })
  .state('kaki6b', {
    url: '/kaki6b',
    templateUrl: 'templates/kaki6b.html',
    controller: 'kaki6bCtrl'
  })
  .state('punggung1', {
    url: '/punggung1',
    templateUrl: 'templates/punggung1.html',
    controller: 'punggung1Ctrl'
  })
  .state('punggung2', {
    url: '/punggung2',
    templateUrl: 'templates/punggung2.html',
    controller: 'punggung2Ctrl'
  })
  .state('punggung3', {
    url: '/punggung3',
    templateUrl: 'templates/punggung3.html',
    controller: 'punggung3Ctrl'
  })
  .state('punggung4', {
    url: '/punggung4',
    templateUrl: 'templates/punggung4.html',
    controller: 'punggung4Ctrl'
  })
  .state('punggung5', {
    url: '/punggung5',
    templateUrl: 'templates/punggung5.html',
    controller: 'punggung5Ctrl'
  })
  .state('perut1', {
    url: '/perut1',
    templateUrl: 'templates/perut1.html',
    controller: 'perut1Ctrl'
  })

  .state('perut2a', {
    url: '/perut2a',
    templateUrl: 'templates/perut2a.html',
    controller: 'perut2aCtrl'
  })

  .state('perut2b', {
    url: '/perut2b',
    templateUrl: 'templates/perut2b.html',
    controller: 'perut2bCtrl'
  })

  .state('perut2c', {
    url: '/perut2c',
    templateUrl: 'templates/perut2c.html',
    controller: 'perut2cCtrl'
  })

  .state('perut3a', {
    url: '/perut3a',
    templateUrl: 'templates/perut3a.html',
    controller: 'perut3aCtrl'
  })

  .state('perut3b', {
    url: '/perut3b',
    templateUrl: 'templates/perut3b.html',
    controller: 'perut3bCtrl'
  })

  .state('perut3c', {
    url: '/perut3c',
    templateUrl: 'templates/perut3c.html',
    controller: 'perut3cCtrl'
  })

  .state('perut4', {
    url: '/perut4',
    templateUrl: 'templates/perut4.html',
    controller: 'perut4Ctrl'
  })

  .state('perut5', {
    url: '/perut5',
    templateUrl: 'templates/perut5.html',
    controller: 'perut5Ctrl'
  })

  .state('lR3', {
    url: '/lr3',
    templateUrl: 'templates/lR3.html',
    controller: 'lR3Ctrl'
  })

  .state('meningkatkanASI', {
    url: '/asi',
    templateUrl: 'templates/meningkatkanASI.html',
    controller: 'meningkatkanASICtrl'
  })

  .state('meredakanBatukPilek', {
    url: '/batuk',
    templateUrl: 'templates/meredakanBatukPilek.html',
    controller: 'meredakanBatukPilekCtrl'
  })

  .state('meningkatkanNafsuMakan', {
    url: '/nafsu-makan',
    templateUrl: 'templates/meningkatkanNafsuMakan.html',
    controller: 'meningkatkanNafsuMakanCtrl'
  })

  .state('mengatasiMualDanMuntah', {
    url: '/mual-muntah',
    templateUrl: 'templates/mengatasiMualDanMuntah.html',
    controller: 'mengatasiMualDanMuntahCtrl'
  })

  .state('mengurangiNyeriHaid', {
    url: '/nyeri-haid',
    templateUrl: 'templates/mengurangiNyeriHaid.html',
    controller: 'mengurangiNyeriHaidCtrl'
  })

  .state('mengatasiSembelit', {
    url: '/sembelit',
    templateUrl: 'templates/mengatasiSembelit.html',
    controller: 'mengatasiSembelitCtrl'
  })

  .state('mengatasiGatalBiduran', {
    url: '/gatal',
    templateUrl: 'templates/mengatasiGatalBiduran.html',
    controller: 'mengatasiGatalBiduranCtrl'
  })

  .state('mengatasiKramOtot', {
    url: '/kram-otot',
    templateUrl: 'templates/mengatasiKramOtot.html',
    controller: 'mengatasiKramOtotCtrl'
  })

  .state('mengurangiSakitKepalaMigren', {
    url: '/sakit-kepala',
    templateUrl: 'templates/mengurangiSakitKepalaMigren.html',
    controller: 'mengurangiSakitKepalaMigrenCtrl'
  })

  .state('mengatasiStres', {
    url: '/stres',
    templateUrl: 'templates/mengatasiStres.html',
    controller: 'mengatasiStresCtrl'
  })

  .state('mengatasiSulitTidur', {
    url: '/sulit-tidur',
    templateUrl: 'templates/mengatasiSulitTidur.html',
    controller: 'mengatasiSulitTidurCtrl'
  })

  .state('meningkatkanKetahananTubuh', {
    url: '/ketahanan-tubuh',
    templateUrl: 'templates/meningkatkanKetahananTubuh.html',
    controller: 'meningkatkanKetahananTubuhCtrl'
  })

  .state('mengatasiNyeriPinggang', {
    url: '/nyeri-pinggang',
    templateUrl: 'templates/mengatasiNyeriPinggang.html',
    controller: 'mengatasiNyeriPinggangCtrl'
  })

  .state('mengatasiSesakNapas', {
    url: '/sesak-napas',
    templateUrl: 'templates/mengatasiSesakNapas.html',
    controller: 'mengatasiSesakNapasCtrl'
  })

  .state('dasarDasarAkupresur', {
    url: '/dasar-akupresur',
    templateUrl: 'templates/dasarDasarAkupresur.html',
    controller: 'dasarDasarAkupresurCtrl'
  })

$urlRouterProvider.otherwise('/page1/home')


});