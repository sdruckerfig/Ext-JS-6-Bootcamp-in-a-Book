Ext.define('PatientChart.view.research.clinicaltrails.ClinicalTrialsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.research-clinicaltrails-clinicaltrials',
    data: {
        selectedTrial: null
    },
    stores: {
        ClinicalTrials: {
            model: 'PatientChart.model.ClinicalTrial',
            remoteFilter: true,
            buffered: true,
            remoteSort: true,
            listeners: {
            	load: 'onClinicalTrialsLoad'
            }
        }
    }
});
