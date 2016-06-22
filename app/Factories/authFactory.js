"use strict";

Pickture.factory('authFactory', [

function () {

	let TakerName = null;

	return {
		getUser () {
			console.log("TakerName");
			return TakerName;
		},
		setUser (user) {
			TakerName = user;
		}
	}
}


]);
