const User = require('../../Models/User');

const newUser = new User();
test('get user login name', ()=>{
    newUser.setLoginName('Yannick')
    expect(newUser.getLoginName()).toBe('Yannick');
})
test('get user password ', ()=>{
    newUser.setPassword('password')
    expect(newUser.getPassword()).toBe('password');
})
test('get cinema id ', ()=>{
    newUser.setCinemaId(1)
    expect(newUser.getCinemaId()).toBe(1);
})
test('get review id ', ()=>{
    newUser.setReviewId(1)
    expect(newUser.getReviewId()).toBe(1);
})
