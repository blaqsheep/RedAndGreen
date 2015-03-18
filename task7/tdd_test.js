//TestMyCode will be here
TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello world!", result);
});

TestMyCode.run("testing hello world function", function(assert){
	var result = helloWorld();
	assert.equals("hello world!", result);
});

TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello wold!", result);
});