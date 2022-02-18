Hello!

This code basicly does everything that can a doubly linked list can do. But the different thing that I've coded is optimizing the complexity of searching in a linked list. Instead of starting to search from the head node, storing a cursor-like pointer will be more efficient. The cursor simply responsible for adding and removing node. If you want to add a node the cursor-like pointer node will simply go to the end from It's last position. So the key optimization is reaching to a node.

example:
(let's think that this is a linked list and "^" shows the operation index whether it can be adding or removing a node from that position and "()" is the where the cursor pointer stands in mean time)

1 2^ 3 (4) 5 
     
for this case instead of taking the cursor to the head, the program will make the calculation for 3 different technique for reaching to the node. first one is taking the cursor to the head. Second one is moving forward. Third one is moving backward. Program makes the calculation and selects the most efficient way to moving the cursor. In this case going back to head makes things even faster.
 
 1 2 3 4^ 5 (6)

But for this case moving backward is more efficient, so the cursor will move backward 2 steps




There still some room for improvment, I'll be updating the code!


Hello again!
(Update 1)
Added a new feature! Just like moving from head, if it's more efficient; the cursor node will simply move to the tail and reach to the operation index backwards.