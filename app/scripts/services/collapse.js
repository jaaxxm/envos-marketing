'use strict';

angular.module('envosMarketingApp')
  .service('collapseBlocks', function () {
    
    var blocks = [true, true, true];

    var initBlocks = function()
    {
      return blocks;
    }
    var openBlock= function(e)
    {
      if(blocks[e] = false) {
        blocks[e] = true;
      } else {      
        for(var i=0;i<blocks.length;i++)
          blocks[i]=true;
        blocks[e] = !blocks[e];
      }      
    }
    var closeBlock = function(e)
    {
      blocks[e] = true;
    }
    var closeBlocks = function()
    {
      blocks = [true, true, true];
    }
    return {      
      initBlocks: initBlocks,
      openBlock: openBlock,
      closeBlock: closeBlock,
      closeBlocks: closeBlocks
    }
    
  });