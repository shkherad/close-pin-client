'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const profileApi = require('./profile_api');
const profileUi = require('./profile_ui');

const onCreateProfile = function(event) {
  event.preventDefault();
  console.log(event.target)
  let data = getFormFields(event.target);
  profileApi.createProfile(data)
  .done(profileUi.createProfileSuccess)
  .fail(profileUi.failure);
};

const onUpdateProfile = function(event) {
  event.preventDefault();
  let profile_id = $('.current-profile').val();
  let data = getFormFields(event.target);
  profileApi.updateProfile(data, profile_id)
  .done(profileUi.updateProfileSuccess)
  .fail(profileUi.failure);
}




const addHandlers = () => {
  $('#create-profile').on('submit', onCreateProfile);
  $('#update-profile').on('submit', onUpdateProfile);

  $('#edit-profile-button').on('click', function(){$('#edit-profile-modal').modal('show');});
};
//
module.exports = {
  addHandlers,
};
