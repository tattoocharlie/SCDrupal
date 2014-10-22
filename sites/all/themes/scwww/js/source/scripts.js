
//# sourceMappingURL=scripts.map


/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.basic = {
        attach: function(context, settings) {

            $(window).ready(function() {
                // Execute code once the window is ready.
            });

            $(window).load(function() {
                // Execute code once the window is fully loaded.
            });

            $(window).resize(function() {
                // Execute code when the window is resized.

                /* if (window.matchMedia("(min-width: 768px)").matches) {
                 $(".front #block-festival-dates").css({ 'height': ($(".front #region-pre-content .block").height() + 40) });
                 } else {
                 $(".front #block-festival-dates").css({ 'height': 'auto' });
                 } <- DO NOT use matchMedia as does not work with Android 2.3.6 */

                if (Modernizr.mq('(min-width: 769px)')) {
                    $(".front #block-festival-dates").css({ 'height': ($(".front #region-pre-content .block").height() + 40) });
                    $("#region-partners").css({ 'height': $("#region-sc-info").height() });
                } else {
                    $(".front #block-festival-dates").css({ 'height': 'auto' });
                    $("#region-partners").css({ 'height': 'auto' });
                }
            });

            $(window).scroll(function () {
                // Execute code when the window scrolls.
            });

            $(document).ready(function() {
                // Execute code once the DOM is ready.
                // alert( $.fn.jquery );

                /* if (window.matchMedia("(min-width: 768px)").matches) {
                 $(".front #block-festival-dates").css({ 'height': ($(".front #region-pre-content .block").height() + 40) });
                 } else {
                 $(".front #block-festival-dates").css({ 'height': 'auto' });
                 } <- DO NOT use matchMedia as does not work with Android 2.3.6 */

                if (Modernizr.mq('(min-width: 769px)')) {
                    $(".front #block-festival-dates").css({ 'height': ($(".front #region-pre-content .block").height() + 40) });
                    $("#region-partners").css({ 'height': $("#region-sc-info").height() });
                } else {
                    $(".front #block-festival-dates").css({ 'height': 'auto' });
                    $("#region-partners").css({ 'height': 'auto' });
                }




                /* ===== Responsive menu ===== */
                $("#mobile-menu-icon").click(function(e){
                    // e.preventDefault();
                    // $("#primary").toggleClass('collapse');
                });
                /* ===== /Responsive menu ===== */

                /* ===== Force external links to open in new tab/window ===== */
                /* $("a[href^=http]").each(function(){

                 // NEW - excluded domains list
                 var excludes = [
                 'localhost',
                 'localhost:8888'
                 ];
                 for(i=0; i<excludes.length; i++) {
                 if(this.href.indexOf(excludes[i]) != -1) {
                 return true; // continue each() with next link
                 }
                 }

                 if(this.href.indexOf(location.hostname) == -1) {

                 // attach a do-nothing event handler to ensure we can 'trigger' a click on this link
                 $(this).click(function() { return true; });

                 $(this).attr({
                 target: "_blank",
                 title: "Opens in a new window"
                 });

                 $(this).click(); // trigger it
                 }
                 }); */
                /* ===== /Force external links to open in new tab/window ===== */


                /* ===== JSON ===== */

                /* var wwwJSON = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
                $.getJSON( wwwJSON, {
                    tags: "mount rainier",
                    tagmode: "any",
                    format: "json"
                })
                    .done(function( data ) {
                        $.each( data.items, function( i, item ) {
                            $( "<img>" ).attr( "src", item.media.m ).appendTo( "#json-feed" );
                            if ( i === 3 ) {
                                return false;
                            }
                        });
                    }); */

                /* var wwwJSON = "sites/default/files/twitter_webwewantfest.json";
                $.getJSON( wwwJSON, {
                    tags: "mount rainier",
                    tagmode: "any",
                    format: "json"
                })
                    .done(function( data ) {
                        $.each( data.items, function( i, item ) {
                            //$( "<img>" ).attr( "src", item.media.m ).appendTo( "#json-feed" );
                            $(item.text).appendTo( "#json-feed" );
                            if ( i === 3 ) {
                                return false;
                            }
                        });
                    }); */

                // Removed for Sprint 2 (add back in for next sprint)
                /* $.getJSON( "sites/default/files/twitter_WebInspire.json", function( data ) {
                    var items = [];
                    $.each( data.tweets, function( key, value ) {
                        items.push( "<li id='" + key + "'><a href='https://twitter.com/" + value.data.from_user + "' class='user-link'><img src='" + value.data.profile_image + "' title='" + value.data.from_user_name + "' alt='" + value.data.from_user_name + "' class='profile-img'><div class='user'>" + value.data.from_user_name + " <span class='username'>@" + value.data.from_user +"</span></div></a>" + value.text + "<div class='twitter-links'> <a href='https://twitter.com/intent/tweet?in_reply_to=" + value.data.id + "'>Reply</a> <a href='https://twitter.com/intent/retweet?tweet_id=" + value.data.id + "'>Retweet</a> <a href='https://twitter.com/intent/favorite?tweet_id=" + value.data.id + "'>Favorite</a></div></li>" );
                    });

                    $( "<ul/>", {
                        "class": "social-list",
                        html: items.join( "" )
                    }).appendTo( "#json-feed-web-inspire" );
                });

                $.getJSON( "sites/default/files/twitter_WebCreate.json", function( data ) {
                    var items = [];
                    $.each( data.tweets, function( key, value ) {
                        items.push( "<li id='" + key + "'><a href='https://twitter.com/" + value.data.from_user + "' class='user-link'><img src='" + value.data.profile_image + "' title='" + value.data.from_user_name + "' alt='" + value.data.from_user_name + "' class='profile-img'><div class='user'>" + value.data.from_user_name + " <span class='username'>@" + value.data.from_user +"</span></div></a>" + value.text + "<div class='twitter-links'> <a href='https://twitter.com/intent/tweet?in_reply_to=" + value.data.id + "'>Reply</a> <a href='https://twitter.com/intent/retweet?tweet_id=" + value.data.id + "'>Retweet</a> <a href='https://twitter.com/intent/favorite?tweet_id=" + value.data.id + "'>Favorite</a></div></li>" );
                    });

                    $( "<ul/>", {
                        "class": "social-list",
                        html: items.join( "" )
                    }).appendTo( "#json-feed-web-create" );
                });

                $.getJSON( "sites/default/files/twitter_OpenWeb.json", function( data ) {
                    var items = [];
                    $.each( data.tweets, function( key, value ) {
                        items.push( "<li id='" + key + "'><a href='https://twitter.com/" + value.data.from_user + "' class='user-link'><img src='" + value.data.profile_image + "' title='" + value.data.from_user_name + "' alt='" + value.data.from_user_name + "' class='profile-img'><div class='user'>" + value.data.from_user_name + " <span class='username'>@" + value.data.from_user +"</span></div></a>" + value.text + "<div class='twitter-links'> <a href='https://twitter.com/intent/tweet?in_reply_to=" + value.data.id + "'>Reply</a> <a href='https://twitter.com/intent/retweet?tweet_id=" + value.data.id + "'>Retweet</a> <a href='https://twitter.com/intent/favorite?tweet_id=" + value.data.id + "'>Favorite</a></div></li>" );
                    });

                    $( "<ul/>", {
                        "class": "social-list",
                        html: items.join( "" )
                    }).appendTo( "#json-feed-open-web" );
                });

                $.getJSON( "sites/default/files/twitter_WebJoyWebWorry.json", function( data ) {
                    var items = [];
                    $.each( data.tweets, function( key, value ) {
                        items.push( "<li id='" + key + "'><a href='https://twitter.com/" + value.data.from_user + "' class='user-link'><img src='" + value.data.profile_image + "' title='" + value.data.from_user_name + "' alt='" + value.data.from_user_name + "' class='profile-img'><div class='user'>" + value.data.from_user_name + " <span class='username'>@" + value.data.from_user +"</span></div></a>" + value.text + "<div class='twitter-links'> <a href='https://twitter.com/intent/tweet?in_reply_to=" + value.data.id + "'>Reply</a> <a href='https://twitter.com/intent/retweet?tweet_id=" + value.data.id + "'>Retweet</a> <a href='https://twitter.com/intent/favorite?tweet_id=" + value.data.id + "'>Favorite</a></div></li>" );
                    });

                    $( "<ul/>", {
                        "class": "social-list",
                        html: items.join( "" )
                    }).appendTo( "#json-feed-web-joy-web-worry" );
                });

                $.getJSON( "sites/default/files/twitter_MyWebIdea.json", function( data ) {
                    var items = [];
                    $.each( data.tweets, function( key, value ) {
                        items.push( "<li id='" + key + "'><a href='https://twitter.com/" + value.data.from_user + "' class='user-link'><img src='" + value.data.profile_image + "' title='" + value.data.from_user_name + "' alt='" + value.data.from_user_name + "' class='profile-img'><div class='user'>" + value.data.from_user_name + " <span class='username'>@" + value.data.from_user +"</span></div></a>" + value.text + "<div class='twitter-links'> <a href='https://twitter.com/intent/tweet?in_reply_to=" + value.data.id + "'>Reply</a> <a href='https://twitter.com/intent/retweet?tweet_id=" + value.data.id + "'>Retweet</a> <a href='https://twitter.com/intent/favorite?tweet_id=" + value.data.id + "'>Favorite</a></div></li>" );
                    });

                    $( "<ul/>", {
                        "class": "social-list",
                        html: items.join( "" )
                    }).appendTo( "#json-feed-my-web-idea" );
                }); */


                /* ===== /JSON ===== */

            });

            $(document).ajaxComplete(function() {

                /* ===== Force external links to open in new tab/window ===== */
                $(".social-list a[href^=http]").each(function(){

                    // NEW - excluded domains list
                    var excludes = [
                        'localhost',
                        'localhost:8888'
                    ];
                    for(i=0; i<excludes.length; i++) {
                        if(this.href.indexOf(excludes[i]) != -1) {
                            return true; // continue each() with next link
                        }
                    }

                    if(this.href.indexOf(location.hostname) == -1) {

                        // attach a do-nothing event handler to ensure we can 'trigger' a click on this link
                        $(this).click(function() { return true; });

                        $(this).attr({
                            target: "_blank",
                            title: "Opens in a new window"
                        });

                        $(this).click(); // trigger it
                    }
                });
                /* ===== /Force external links to open in new tab/window ===== */

            });
        }
    };


})(jQuery, Drupal, this, this.document);