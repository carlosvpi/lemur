import {describe, expect, test} from '@jest/globals';
import { getStackMachineEdges } from './util';
import { stackMachineAnalyze } from '../src/_stackMachineAnalyze';
import { depthRun } from '../src/depthRun';
import { pathChildren } from '../src/pathChildren';
import { find } from '../src/find';

describe('stackMachineAnalyze', () => {
   test('should traverse breadth first a tree', () => {
      const input = "the cute cat plays-with a dog".split(" ")
      const getChildren = pathChildren(stackMachineAnalyze(getStackMachineEdges, '*', '*', '*'))
      const run = depthRun(getChildren)(pathChildren.wrap(stackMachineAnalyze.init("S", input)))
      const result = find(pathChildren.map(stackMachineAnalyze.isFinish<string, string, string>))(run)
      expect(result).toEqual([
         {
           "node": "Noun",
           "input": input,
           "index": 6,
           "stack": []
         },
         {
           "node": "End",
           "input": input,
           "index": 5,
           "stack": [
             "Noun"
           ]
         },
         {
           "node": "Adj",
           "input": input,
           "index": 5,
           "stack": [
             "Noun"
           ]
         },
         {
           "node": "End",
           "input": input,
           "index": 4,
           "stack": [
             "Adj",
             "Noun"
           ]
         },
         {
           "node": "Art",
           "input": input,
           "index": 4,
           "stack": [
             "Adj",
             "Noun"
           ]
         },
         {
           "node": "Nom",
           "input": input,
           "index": 4,
           "stack": []
         },
         {
           "node": "End",
           "input": input,
           "index": 3,
           "stack": [
             "Nom"
           ]
         },
         {
           "node": "Verb",
           "input": input,
           "index": 3,
           "stack": [
             "Nom"
           ]
         },
         {
           "node": "End",
           "input": input,
           "index": 2,
           "stack": [
             "Verb",
             "Nom"
           ]
         },
         {
           "node": "Noun",
           "input": input,
           "index": 2,
           "stack": [
             "Verb",
             "Nom"
           ]
         },
         {
           "node": "End",
           "input": input,
           "index": 1,
           "stack": [
             "Noun",
             "Verb",
             "Nom"
           ]
         },
         {
           "node": "Adj",
           "input": input,
           "index": 1,
           "stack": [
             "Noun",
             "Verb",
             "Nom"
           ]
         },
         {
           "node": "End",
           "input": input,
           "index": 0,
           "stack": [
             "Adj",
             "Noun",
             "Verb",
             "Nom"
           ]
         },
         {
           "node": "Art",
           "input": input,
           "index": 0,
           "stack": [
             "Adj",
             "Noun",
             "Verb",
             "Nom"
           ]
         },
         {
           "node": "Nom",
           "input": input,
           "index": 0,
           "stack": [
             "Verb",
             "Nom"
           ]
         },
         {
           "node": "S",
           "input": input,
           "index": 0,
           "stack": []
         }
       ]);
   });
});

/*
Node   input[i]   Stack
Noun   undefined 
End    dog        Noun
Adj    dog        Noun
End    a          Adj.Noun
Art    a          Adj.Noun
Nom    a          
End    plays-with Nom
Verb   plays-with Nom
End    cat        Verb.Nom
Noun   cat        Verb.Nom
End    cute       Noun.Verb.Nom
Adj    cute       Noun.Verb.Nom
End    the        Adj.Noun.Verb.Nom
Art    the        Adj.Noun.Verb.Nom
End    the        Art.Adj.Noun.Verb.Nom
Nom    the        Verb.Nom
End    the        Nom.Verb.Nom
S      the        

S
- Nom
- - Art
- - - the
- - Adj
- - - cute
- - Noun
- - - cat
- Verb
- - plays-with
- Nom
- - Art
- - - a
- - Adj
- - - \
- - Noun
- - - dog

*/