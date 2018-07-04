/**
 * @fileoverview async-must-await
 * @author agree
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "async-must-await",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            CallExpression: function(node) {
              if(node.callee.object && node.callee.property){
                var sourceCode = context.getSourceCode();
                var nodeSource = sourceCode.getText(node,6);
                
                if (String(node.callee.property.name).indexOf('Async') !== -1 && String(nodeSource).indexOf('await') == -1) {
                  context.report({
                    node,
                    message: '调用Async后缀的方法必须加await',
                    data: {
                      fn: node.callee.property.name
                    }
                  });
                }
              }   
            }
        };
    }
};
