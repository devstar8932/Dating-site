(function() {
'use strict';

angular
.module('app.events')
.controller('EventsController', EventsController);

EventsController.$inject = ['logger','$rootScope','$cookies','$location','$state'];
/* @ngInject */
function EventsController(logger,$rootScope,$cookies,$location,$state) {
var vm = this;
vm.title = 'About Us';
vm.selectedIndex = 0;

vm.UpcomingEventsData = [
	{
		title : "Lecture on Pre-Marriage counselling by Dr Devyani Katti",
		day : "Sun",
		date : "19",
		month : "Feb",
		year : "2017",
		description : "लग्नाची बोलणी तर्फे विवाह इच्छुकांसाठी मार्गदर्शनपर कार्यक्रम आयोजित करण्यात आला होता. तो 19 फेब्रुवारी रोजी पार पडला. डॉ देवयानी कट्टी यांनी वधूवरांना आपल्या अनोख्या शैलीत मार्गदर्शन केले. आपला जोडीदार निवडण्यापूर्वी मुलं मुलींनी काय तयारी करावी. जोडीदार निवडताना कोणकोणत्या गोष्टींवर लक्ष द्यावे.निवडलेला जोडीदार आपल्यासाठी योग्य आहे की नाही हे लग्नापूर्वी कसे ओळखता येऊ शकेल, आणि यासाठी प्री मॅरीटल कौन्सेलिंग ची कशी मदत घेता येऊ शकेल याचे अचूक मार्गदशन त्यांनी केले. या वेळी वधुवरांची सेल्फीची हौस पूर्ण व्हावी म्हणून सेल्फी कॉर्नर उपलब्ध करून देण्यात आला होता. वधूवरांनी लग्नाची बोलणीबरोबर आणि एकमेकांबरोबर सेल्फी काढत आनंद लुटला. लग्नाची बोलणी हि संस्था मागील 6 वर्षा पासून कार्यान्वित आहे. लग्न जमवण्यात येणाऱ्या अडचणी कशा कमी करता येऊ शकतील, भावी वधूवरांना जोडीदार शोधणेे सोपे कसे जाईल, यावर आम्ही कार्यशील आहोत. Lagnachobolni.com या संकेत स्थळावर आपण आपली नोंदणी करू शकाल. संपर्क- 7218701870",
		images : ['images/Events/19Feb17/1.jpg','images/Events/19Feb17/2.jpg',
		'images/Events/19Feb17/3.jpg','images/Events/19Feb17/4.jpg',
		'images/Events/19Feb17/5.jpg',
		'images/Events/19Feb17/6.jpg','images/Events/19Feb17/7.jpg','images/Events/19Feb17/8.jpg','images/Events/19Feb17/9.jpg','images/Events/19Feb17/10.jpg','images/Events/19Feb17/11.jpg','images/Events/19Feb17/12.jpg']

	},
	{
		title : "Celebrating 1 Year successfully Business completion at laganachi-bolani.com ",
		day : "Sun",
		date : "19",
		month : "Feb",
		year : "2017",
		startDate : "17th March 2017",
		description : "Event management is the application of project management to the creation and development of large scale events such as festivals, conferences, ceremonies, formal parties, concerts, or conventions. It involves studying the brand, identifying the target audience, devising the event concept, and coordinating the technical aspects before actually launching the event.",
		images : ['images/img08.jpg','images/img15.jpg','images/img08.jpg','images/img11.jpg','images/img12.jpg']

	}
];
vm.PastEventsData = [
	{
		title : "Lecture on Pre-Marital counselling by Dr Devyani Katti",
		day : "Sun",
		date : "19",
		month : "Feb",
		year : "2017",
		description : "लग्नाची बोलणी तर्फे विवाह इच्छुकांसाठी मार्गदर्शनपर कार्यक्रम आयोजित करण्यात आला होता. तो 19 फेब्रुवारी रोजी पार पडला. डॉ देवयानी कट्टी यांनी वधूवरांना आपल्या अनोख्या शैलीत मार्गदर्शन केले. आपला जोडीदार निवडण्यापूर्वी मुलं मुलींनी काय तयारी करावी. जोडीदार निवडताना कोणकोणत्या गोष्टींवर लक्ष द्यावे.निवडलेला जोडीदार आपल्यासाठी योग्य आहे की नाही हे लग्नापूर्वी कसे ओळखता येऊ शकेल, आणि यासाठी प्री मॅरीटल कौन्सेलिंग ची कशी मदत घेता येऊ शकेल याचे अचूक मार्गदशन त्यांनी केले. या वेळी वधुवरांची सेल्फीची हौस पूर्ण व्हावी म्हणून सेल्फी कॉर्नर उपलब्ध करून देण्यात आला होता. वधूवरांनी लग्नाची बोलणीबरोबर आणि एकमेकांबरोबर सेल्फी काढत आनंद लुटला. लग्नाची बोलणी हि संस्था मागील 6 वर्षा पासून कार्यान्वित आहे. लग्न जमवण्यात येणाऱ्या अडचणी कशा कमी करता येऊ शकतील, भावी वधूवरांना जोडीदार शोधणेे सोपे कसे जाईल, यावर आम्ही कार्यशील आहोत. Lagnachobolni.com या संकेत स्थळावर आपण आपली नोंदणी करू शकाल. संपर्क- 7218701870",
		images : ['images/Events/19Feb17/1.jpg','images/Events/19Feb17/2.jpg',
		'images/Events/19Feb17/3.jpg','images/Events/19Feb17/4.jpg',
		'images/Events/19Feb17/5.jpg',
		'images/Events/19Feb17/6.jpg','images/Events/19Feb17/7.jpg','images/Events/19Feb17/8.jpg','images/Events/19Feb17/9.jpg','images/Events/19Feb17/10.jpg','images/Events/19Feb17/11.jpg','images/Events/19Feb17/12.jpg']

	},
	{
		title : "Celebrating 1 Year successfully Business completion at laganachi-bolani.com ",
		day : "Sun",
		date : "19",
		month : "Feb",
		year : "2017",
		startDate : "17th March 2017",
		description : "Event management is the application of project management to the creation and development of large scale events such as festivals, conferences, ceremonies, formal parties, concerts, or conventions. It involves studying the brand, identifying the target audience, devising the event concept, and coordinating the technical aspects before actually launching the event.",
		images : ['images/img08.jpg','images/img15.jpg','images/img08.jpg','images/img11.jpg','images/img12.jpg']

	}
];

var picPaths = ['images/img08.jpg','images/img15.jpg','images/img08.jpg','images/img11.jpg','images/img12.jpg'];
//var curPic = -1;
//preload the images for smooth animation
/*var imgO = new Array();
for(var i=0; i < picPaths.length; i++) {
    imgO[i] = new Image();
    imgO[i].src = picPaths[i];
}

function swapImage() {
    curPic = (++curPic > picPaths.length-1) ? 0 : curPic;
    imgCont.src = imgO[curPic].src;
    setTimeout( swapImage , 2000);
}

var imgCont ;
window.onload = function() {
    imgCont = document.getElementById('imgBanner');
    swapImage();
}*/

vm.changeImage = changeImage ;
function changeImage(index,picPath) {
	var  imgBanner = document.getElementById('imgBanner-'+index);
    imgBanner.src = picPath;
}

window.scrollTo(0,0);

}
})();
