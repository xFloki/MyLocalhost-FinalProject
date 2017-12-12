const express = require('express');
const HouseInvitationController = require("./house-invitation.controller");
const houseInvitationRoutes = express.Router();

houseInvitationRoutes.get('/', HouseInvitationController.getInvitations);
houseInvitationRoutes.get('/current', HouseInvitationController.currentInvitations);
houseInvitationRoutes.delete('/all', HouseInvitationController.deleteUserInvitations);
houseInvitationRoutes.delete('/:id', HouseInvitationController.deleteInvitation);


module.exports = houseInvitationRoutes;
