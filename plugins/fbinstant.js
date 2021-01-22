// Written by Rabia Alhaffar in 9/December/2020
// FBInstant plugin for Pancake
if ((p && pancake && p == pancake && FBInstant)) {
	var fb = FBInstant;
	fb.initializeAsync();
	
	p.fb = {};
	p.fb.name = fb.player.getName();
	p.fb.id = fb.player.getID();
	p.fb.photo = fb.player.getPhoto();
	p.fb.os = fb.player.getPlatform();
	p.fb.sdkver = p.fb.version = fb.getSDKVersion();
	p.fb.contextID = fb.context.getID();
	p.fb.contextType = fb.context.getType();
	p.fb.locale = fb.getLocale();
	
	p.fb.leaderboardName = fb.leaderboard.getName;
	p.fb.exit = fb.quit;
	p.fb.postScore = fb.postSessionScore;
	p.fb.setLoadingProgress = fb.setLoadingProgress;
	
	pancake.facebook = p.fb;
}