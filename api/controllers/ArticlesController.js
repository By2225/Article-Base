/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	// list function
	list:function(req, res){
	
		Articles.find({}).exec(function(err, articles){
	
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.view('list', {articles:articles});
		});
	//	res.view('list');
	},
// Add function
	add: function(req, res){
	//	console.log("WHYYYY ISN'T THIS WORKING");
		res.view('add');
		//console.log("WHYYYY ISN'T THIS WORKING");
},
	// Create function
create:function(req, res){
		var title = req.body.title;
		var body = req.body.body;
		//console.log(title);

		Articles.create({title:title, body:body}).exec(function(err){
				if(err){
						res.send(500, {error: 'Database Error'});
				}
					res.redirect('/articles/list');
				

		});
},

delete: function(req, res){
	Articles.destroy({id:req.params.id}).exec(function(err){
		if(err){
			res.send(500, {error: 'Database Error'});
	}
		res.redirect('/articles/list');
	});
	return false;
},

edit: function(req, res){
	
	Articles.findOne({id:req.params.id}).exec(function(err, article){
		
			if(err){
					res.send(500, {error: 'Database Error'});
			}
			res.view("edit", {article:article});
	});
},

update:function(req, res){
	var title = req.body.title;
	var body = req.body.body;
	//console.log(title);

	// We're updating the first parameter characteristics, title and body
	Articles.update({id: req.params.id}, {title:title, body:body}).exec(function(err){
			if(err){
					res.send(500, {error: 'Database Error'});
			}
				res.redirect('/articles/list');
			

	});
	return false;
}

	

};

