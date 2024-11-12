# Philosophy

If you represent your problem in the form of a tree, you no longer need to solve it. Lemur can solve it for you. This library can swing from node to node until finding what you consider a solution.

This more declarative way of thinking about coding decouples a problem from the strategy to find a solution. If you describe a maze as a graph of adyacent coordinates, you can use lemur to perform an A* search to reach the solution. If, later, you arrive at a better heuristic, you can change your searching strategy while keeping all the hard work of defining the problem.
