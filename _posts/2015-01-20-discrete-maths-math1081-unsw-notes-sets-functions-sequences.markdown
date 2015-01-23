---
layout: note
title: "Discrete Maths (MATH1081): Section 1 — Sets, Functions, and Sequences"
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

## Functions
> A function ƒ from a set X to a set Y is a subset of X × Y with the property that for each _x_ ∈ X, there is __exactly one__ ordered pair (_x_, _y_) ∈ ƒ.

Takeaways from that definition's mess: 

1. a function is a set.
2. each _x_ value can only be paired with _one_ _y_ value.

The function

ƒ : X → Y

has X as the _domain_ and Y as the _codomain_ (the codomain is the set containing all of the _y_ values that _could_ occur).

### Floor and ceiling
For any _x_ ∈ ℝ,

> __Floor__: the largest integer that is less than or equal to _x_. 
> Written as ⌊_x_⌋.

<br/>

>  __Ceiling__: the smallest integer that is greater than or equal to _x_. 
>  Written as ⌈_x_⌉.

For example, ⌊π⌋ = 3, ⌈π⌉ = 4

### Range
> The range of a function ƒ : X → Y is the set of all _y_ ∈ Y such that there is an ordered pair (_x_, _y_) in ƒ.
> That is,
>   { _y_ ∈ Y | (_x_, _y_) ∈ ƒ for some x ∈ X }

More or less, the set of all the _y_ values that actually occur.

### One-to-one
> A function ƒ is one-to-one (or injective) if and only if for each _y_ in the codomain there is only one (i.e. one or none at all) ordered pair (_x_, _y_) in ƒ.

i.e., ƒ is one-to-one means that if ƒ(_x_<sub>1</sub>) = ƒ(_x_<sub>2</sub>), then _x_<sub>1</sub> = _x_<sub>2</sub>.

- recall from Calculus that increasing functions (ƒ′(x) > 0) are one-to-one and that the horizontal line test can be used

### Onto
> A function ƒ : X → Y is onto (or surjective) if and only if for every element y ∈ Y there is an element _x_ ∈ X with _y_ = ƒ(x).

i.e., __a function is onto if its range equals its codomain__.

### Bijection
> A function is a bijection if it is both one-to-one and onto.

### Composition of functions
> Let _g_ : X → Y and ƒ : Y → Z. Then the composition of ƒ and _g_, ƒ ∘ _g_, is the function from X to Z defined by (ƒ ∘ _g_)(_x_) = ƒ(_g_(_x_)).

- for proofs involving composition you will possibly need to “take f (or g) of both sides”

### Inverse functions
> Let ƒ : X → Y. If ƒ is a bijection, then there is a function _g_ : Y → X which, given any y ∈ Y, _g_(_y_) is the element _x_ ∈ X such that _y_ = ƒ(x).
> i.e., _g_(_y_) = _x_ and _y_ = ƒ(_x_)

- _g_ is called the inverse function of ƒ, written as ƒ<sup>–1</sup>

### Composition of a function and its inverse
If ƒ “does something” to a variable, then ƒ<sup>-1</sup> “undoes” it.

- ƒ<sup>-1</sup> ∘ ƒ is the function _i_—called the identity function. It does nothing.

### Applying a function to many elements
> Let ƒ be a function from X to Y. If A ⊆ X, then ƒ(A) = { ƒ(_x_) | _x_ ∈ A}
> If B ⊆ Y, then ƒ<sup>–1</sup>(B) = { _x_ ∈ X | ƒ(_x_) ∈ B}, i.e. the set of all _x_ that produce elements of B.

This is kind of hard to understand. Consider an example.

> Let ƒ : ℝ → ℝ, ƒ(_x_) = _x_<sup>2</sup>
>
> If A = { _x_ ∈ ℝ | 2 < _x_ < 3 } then
>    
> ƒ(A) = { ƒ(_x_) | _x_ ∈ A }
>
>   (Note: ƒ(_x_) = <sup>2</sup>, _y_ = <sup>2</sup>)
>
> ∴ ƒ(A) = { _x_<sup>2</sup> | 2 < _x_ < 3}
> 
> &nbsp; = { _y_ ∈ ℝ | 4 < _y_ < 9 }

And the inverse,

> If B = { _y_ ∈ ℝ | 1 ≤ y < 16 } then
> 
> ƒ<sup>–1</sup>(B) = { _x_ ∈ X | ƒ(_x_) ∈ B}
> 
> and so
> 
> ƒ<sup>–1</sup>(B) = { _x_ ∈ ℝ | 1 ≤ _x_<sup>2</sup> < 16}
> 
> &nbsp; = { _x_ ∈ ℝ | –4 < _x_ ≤ –1 } ∪ { _x_ ∈ ℝ | 1 ≤ _x_ < 4 }

## Sequences and summations

__Note__: For these sections, I write ∑(_a_, _b_) ƒ(_x_) for a sum from _a_ to _b_, because writing it out properly is almost impossible. The best approximation is ∑<sup>_b_</sup><sub>_a_</sub>, which doesn't look great.

### Sequence
> A sequence is a function with domain a subset of ℤ.

- more or less a list
- order and repetition important
- finite sequence is called a _string_

### Basic sums
Memorise these:

> ∑(j = 0, n) a×r<sup>j</sup>) = a(r<sup>n + 1</sup> – 1) ÷ (r – 1)
> 
> ∑(j = 1, n) 1 = 1 + 1 + … + 1 [n times] = n
> 
> ∑(j = 0, n) j = (1/2) × n(n + 1)
> 
> ∑(j = 1, n) j<sup>2</sup> = (1/6) × n × (n + 1) × (2n + 1)
> 
> _Note_: for these last two, j = 0 and j = 1 give the same result.

Also note,

> 25 × ∑(k = 1, 12) 1 = 25 × 12 __not__ 25 × 1


### Addition of sums
Without adding excessive notation, the following are true

> ∑ (a + b) = ∑ a + ∑ b
> 
> ∑ (a – b) = ∑ a – ∑ b

### Multiplication by a constant

> ∑ c × a<sub>k</sub> = c × (∑ a<sub>k</sub>)

i.e., we can pull out a constant factor

### Shifting the index of summation
- too confusing and awkward to write in HTML; see your course notes or textbook

### Telescoping sums
- write out sums in full so that you can identify which of the terms cancel and then you can easily add the rest
- i.e. manually expand then see what you can get rid of
- watch out for negatives
- try to make the expression being summed the same in the two sequences

__∏ means product__