---
layout: note
title: "Section 1 — Sets, Functions, and Sequences"
categories: discrete
---

## Sets
> a set is a collection of objects, which are called the 'elements' of the set

- a ∈ A means that 'a' is an _element_ of A (A is the set)
- sets are equal _if and only if_ they have the same elements
- order and repetition don't matter for sets
- note that a set doesn't equal its elements, i.e. {a} ≠ a

### Cardinality
> the cardinality of a set is the number of elements in the set


- cardinality is denoted by \|A\|

### Empty set
- the empty set is denoted by {} or ∅

### Universal set
> the universal set is the set containing all elements of all sets needed to discuss a topic 

- denoted by _U_
- e.g. _U_ might be ℝ in Calculus, or ℂ in algebra

### Basic notation
The following format is used to indicate a set


> S = { _x_ ∈ _A_ | … }


which is read as "_x_ is an element of _A_ (`x ∈ A`) such that (`|`) some property is true (`…`).

For example, `S = { x ∈ ℤ | –2 < x < 5 }` which is equal to `{ –1, 0, 1, 2, 3, 4 }`.

### Venn diagrams
- when solving a problem using Venn diagrams, you __must state__ what each of the subsets means before you draw the diagram
- note that often you can use inclusion-exclusion principle (covered later) rather than Venn Diagrams

### Subset
> _A_ is a subset of _B_ if and only if every element of A is also an element of B

- A ⊆ B indicates that A is a subset of the set B
- A is the _proper_ subset of B, A ⊂ B, if A ⊆ B but A ≠ B

The following properties are useful:

- if A = B then A ⊆ B and B ⊆ A
- if A ⊂ B then A ⊆ B
- if A ⊆ B and B ⊆ A then A = B (this is used to prove that two sets are equal)
- A is a proper subset of B if it is a subset of B and B has _at least one_ element that is not also in A

__The subset relationship only exists between two sets, i.e. for A ⊆ B, A must be a set.__

#### Proving A is a subset of B
1. Show that any element of A is also an element of B
2. "Let _x_ ∈ LHS" and work to show that x ∈ RHS also.
3. "Thus we have shown that any element of the LHS is also an element of the RHS, therefore LHS ⊆ RHS"

#### Proving A is a proper subset of B
1. Prove A ⊆ B as above
2. Then find one or more example of an element that is in B but not in A

#### Proving A = B
1. Show A ⊆ B and B ⊆ A, i.e. two iterations of the process above

#### Power set
> The power set of a set is the set of all subsets of the set.

- given a set _A_, then power set of _A_ is the set of all of the subsets of the set S
- the power set of S is denoted by __P__(_S_)

For example,

    P({ 0, 1, 2 }) = {
                        ∅,
                        { 0 }, { 1 }, { 2 },
                        { 0, 1 }, { 1, 2 },
                        { 0, 1, 2 },
                     }

__Note__: For a _set_ _X_, _X_ ∈ __P__(S) and _X_ ⊆ _S_ mean the same thing

##### Cardinality of a power set
> If \| _A_ \| = _n_ then \| __P__(_A_) \| = 2<sup>_n_</sup>

Or, in English, the size of the power set is equal to 2<sup>_n_</sup> where n is the number of elements in the set.

### Set algebra

#### Union

> The union of the sets _A_ and _B_ is the set that contains the elements that are either in _A_ or in _B_, or in both.

- denoted by _A_ ∪ _B_
- _A_ ∪ _B_ = { _x_ | _x_ ∈ _A_ or _x_ ∈ _B_ }

#### Intersection
> the set containing elements that in both A and B

- _A_ ∩ _B_

#### Disjoint sets
> two sets are disjoint if their intersection is the empty set (i.e. they have no elements in common)

#### Set difference
> The difference of _A_ and _B_, _A_ – _B_, is the set containing elements in _A_ but not in _B_.

- Note that _A_ – _B_ ≠ _B_ – _A_
- Note that _A_ ∩ _B_<sup>c</sup> = A – B

#### Complement
> The complement of A is A<sup>c</sup>. A<sup>c</sup> = _U_ – _A_ is the set of elements in _U_ but not in _A_.

### Laws of set algebra
1. Commutative laws: A ∪ B = B ∪ A and A ∩ B = B ∩ A
2. Associative laws: A ∪ (B ∪ C) = (A ∪ B) ∪ C and A ∩ (B ∩ C) = (A ∩ B) ∩ C
3. Distribute laws: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) and A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
4. Idempotent laws: A ∪ A = A and A ∩ A = A
5. Double complement laws: (A<sup>c</sup>)<sup>c</sup> = A
6. De Morgan's laws: (A ∪ B)<sup>c</sup> = A<sup>c</sup> ∩ B<sup>c</sup> and (A ∩ B )<sup>c</sup> = A<sup>c</sup> ∪ B<sup>c</sup>
7. Identity laws: A ∪ ∅ = A and A ∩ _U_ = A
8. Domination laws: A ∪ _U_ = _U_ and A ∩ ∅ = ∅
9. Intersection and union with complement: A ∩ A<sup>c</sup> = ∅ and A ∪ A<sup>c</sup> = _U_
10. Alternative representation for set difference: A – B = A ∩ B<sup>c</sup>

__Keep in mind__: the property of _duality_ ('dual') means that you can swap ∩ and ∪, and swap ∅ and _U_. This helps you to remember less, which is good.

### Generalised union and intersection
See your textbook or course notes for this stuff; it's hard to write in HTML.

### Disjoint
As above,

> two sets are disjoint if their intersection is the empty set (i.e. they have no elements in common)

### Pairwise disjoint
> Sets A<sub>1</sub>, A<sub>2</sub>, …, A<sub>n</sub> are pairwise disjoint if and only if A<sub>i</sub> ∩ A<sub>j</sub> = ∅ whenever i ≠ j

(i.e. any 2 sets have no overlapping elements)

### Partition
> A set of non-empty sets { A<sub>1</sub>, A<sub>2</sub>, …, A<sub>n</sub> } is a partition of a set _A_ if and only if
> 1. _A_ = A<sub>1</sub> ∪ A<sub>2</sub> ∪ … ∪ A<sub>n</sub>
> 2. A<sub>1</sub>, A<sub>2</sub>, …, A<sub>n</sub> are pairwise disjoint

(i.e. all of the sets combine to produce the whole, but none of the sets have the same elements)

### Cartesian product
> A × B is the cartesian product is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.

- Note that A<sup>2</sup> = A × A

For example,

    let A = { 1, 2 }
    let B = { 2, 3 }
    then
    A × B = { (1, 2), (1, 3), (2, 2), (2, 3) }

We can also think of these as _xy_ co-ordinate pairs, and they can be sketched on a number plane as such.