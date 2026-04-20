define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Colorectal Cancer', //Will appear in the data.
			title : {
				media : {word : 'Colorectal Cancer'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'colorectal1.png'}, 
    			{image : 'colorectal2.jpg'}, 
    			{image : 'colorectal3.jpg'}, 
    			{image : 'colorectal4.jpg'}, 
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Lung Cancer', //Will appear in the data.
			title : {
				media : {word : 'Lung Cancer'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'lung1.jpg'}, 
    			{image : 'lung2.webp'}, 
    			{image : 'lung3.jpg'}, 
    			{image : 'lung4.jpg'}, 
    			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://github.com/prrismlab/lungiat/new/main/'
		} 
	});
});
