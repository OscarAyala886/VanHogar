//Este archivo nos servira para observar si mi codigo tiene errores y tambien comoevitarlos
module.exports ={
    env:{
        browser: true,
        node: true,
        es2020: true,
    },
    //Aqui esta ignorando espacion y comentarios ya que melos marcaba como error
    extends: ['airbnb-base','prettier','comments'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 11,
    },
    rules: {
        'no-console': 0,
    },
};