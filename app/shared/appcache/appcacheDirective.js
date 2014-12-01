'use strict';

angular.module('appcacheDirective', [])
.directive('manifest', function() {
	return {
		compile: function(element, attrs, transclude) {
			if (!window.applicationCache) {
				return;
			}
			
			if (attrs.$attr.appCacheShow) {
				element.find('body').append('<object id="appcacheObject" type="image/svg+xml" class="appcacheSignal" data="shared/appcache/signals.svg#red"></object>');
			}
			//console.log("BBBBBBBB"+document.body);
			
			/*
			if (attrs.$attr.appCacheShow) {
				element.append('<object id="appcacheObject" type="image/svg+xml" class="appcacheSignal" data="shared/appcache/signals.svg#red"></object>');
			}
			*/
			 
			var appCache = window.applicationCache;
			
			// var online = true;
			// Fired after the first cache of the manifest.
			appCache.addEventListener('cached', handleCacheEvent, false);

			// Checking for an update. Always the first event fired in the sequence.
			appCache.addEventListener('checking', handleCacheEvent, false);

			// An update was found. The browser is fetching resources.
			appCache.addEventListener('downloading', handleCacheEvent, false);

			// The manifest returns 404 or 410, the download failed,
			// or the manifest changed while the download was in progress.
			appCache.addEventListener('error', handleCacheEvent, false);

			// Fired after the first download of the manifest.
			appCache.addEventListener('noupdate', handleCacheEvent, false);

			// Fired if the manifest file returns a 404 or 410.
			// This results in the application cache being deleted.
			appCache.addEventListener('obsolete', handleCacheEvent, false);

			// Fired for each resource listed in the manifest as it is being fetched.
			appCache.addEventListener('progress', handleCacheEvent, false);

			// Fired when the manifest resources have been newly redownloaded.
			appCache.addEventListener('updateready', handleCacheEvent, false);
			
			function handleCacheEvent(e) {
				switch (e.type) {
					case "checking" :
						if (appCache.status === appCache.CHECKING) {
							console.log("checking: offline?");
						}
						else {
							//console.dir(e);
						}
					break;
					case "progress" :
						//console.log("BBBBBB: "+document.getElementById("appcacheObject"));
					break;	
					case "error" :
						switch (e.reason) {
							case "manifest" :
								console.log("error: offline?");
							break;
							default :
								//console.dir(e);	
						}
					break;
					default :
						//console.dir(e);
				}
			}
		}
	}
});

/*
 .directive('appCache', function() {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			if (!window.applicationCache) {
				return;
			}
			if (attrs.$attr.appCacheShow) {
				element.append('<object id="appcacheObject" type="image/svg+xml" class="appcacheSignal" data="shared/appcache/signals.svg#red"></object>');
			}
			//console.dir(attrs);
			//attrs.$attr.appCacheShow);
			//element.addClass('disabled');
			
		}
	}
*/
