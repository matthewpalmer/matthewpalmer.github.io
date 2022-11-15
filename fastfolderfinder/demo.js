
var ALL_RESULTS = [
    "/Users/Matt/Desktop",
    "/Users/Matt/Desktop/MyPlayground",
    "/Users/Matt/Desktop/Screenshots",
    "/Users/Matt/Desktop/Books to Read",
    "/Users/Matt/Desktop/Building Blocks",
    "/Users/Matt/Desktop/Blonded Radio",
    "/Users/Matt/Desktop/Trip to SF",
    "/Users/Matt/Desktop/Algorithms",
    "/Users/Matt/Desktop/Saved Blog Posts",
    "/Users/Matt/Desktop/Renovations",
    "/Users/Matt/Desktop/Defy Resources",
    "/Users/Matt/Desktop/Coffee",
    "/Users/Matt/Desktop/Planets Research",
    "/Users/Matt/Desktop/Quarterly Results",
    "/Users/Matt/Documents",
    "/Users/Matt/Documents/eBooks",
    "/Users/Matt/Documents/Finances",
    "/Users/Matt/Documents/Finances/Block Letters",
    "/Users/Matt/Documents/Finances/FY23",
    "/Users/Matt/Documents/Finances/FY22",
    "/Users/Matt/Documents/Finances/FY20",
    "/Users/Matt/Documents/Finances/FY18",
    "/Users/Matt/Documents/Finances/FY19",
    "/Users/Matt/Documents/Finances/FY21",
    "/Users/Matt/Documents/Recipe Blogs",
    "/Users/Matt/Documents/Writing",
    "/Users/Matt/Documents/Writing/Journal",
    "/Users/Matt/Documents/Writing/Bloviating",
    "/Users/Matt/Documents/Writing/Blog Posts",
    "/Users/Matt/Documents/Writing/Articles",
    "/Users/Matt/Documents/Writing/Project Cyclops",
    "/Users/Matt/Documents/Writing/Kubernetes Book",
    "/Users/Matt/Downloads",
    "/Users/Matt/Downloads/Watcher",
    "/Users/Matt/Downloads/Plane Reading",
    "/Users/Matt/Downloads/RoundWindow",
    "/Users/Matt/Downloads/Family Movie",
    "/Users/Matt/Downloads/Jetbrains",
    "/Users/Matt/Downloads/University Resources",
    "/Users/Matt/Downloads/FSEvents",
    "/Users/Matt/Movies",
    "/Users/Matt/Movies/Short Films",
    "/Users/Matt/Movies/Documentaries",
    "/Users/Matt/Movies/TV Shows",
    "/Users/Matt/Pictures",
    "/Users/Matt/Pictures/Running",
    "/Users/Matt/Pictures/Surfing",
    "/Users/Matt/Pictures/App Design",
    "/Users/Matt/Pictures/Design Research",
    "/Users/Matt/Pictures/Typography",
    "/Users/Matt/Pictures/Travel",
    "/Users/Matt/Podcasts",
    "/Users/Matt/Podcasts/Accidental Tech Podcast",
    "/Users/Matt/Podcasts/Do By Friday",
    "/Users/Matt/Podcasts/Hamish and Andy",
    "/Users/Matt/Podcasts/MBMBaM",
    "/Users/Matt/Podcasts/Roderick on the Line",
    "/Users/Matt/Podcasts/Stab",
    "/Users/Matt/Podcasts/TOFOP",
    "/Users/Matt/Podcasts/The Blog Podcast",
    "/Users/Matt/Podcasts/The Design Podcast",
    "/Users/Matt/Podcasts/The Flop House",
    "/Users/Matt/Podcasts/Under the Radar",
    "/Users/Matt/Projects",
    "/Users/Matt/Projects/FastFolderFinder",
    "/Users/Matt/Projects/Spirit",
    "/Users/Matt/Projects/Peach's",
    "/Users/Matt/Projects/Trying Rails",
    "/Users/Matt/Projects/MacRelease",
    "/Users/Matt/Projects/matthewpalmer.net",
    "/Users/Matt/Projects/matthewpalmer.net/blog",
    "/Users/Matt/Projects/matthewpalmer.net/blog/posts",
    "/Users/Matt/Projects/Emoji Bullet List",
    "/Users/Matt/Projects/Crypto Fills",
    "/Users/Matt/Projects/Rocket",
    "/Users/Matt/Projects/Horo",
    "/Users/Matt/Projects/Vanilla",
    "/Users/Matt/Projects/Delightful Book",
    "/Users/Matt/Projects/OnScreenRuler",
    "/Users/Matt/Projects/Simple Freight Solutions – Brand Design",
    "/Users/Matt/Projects/Wellness Hub – Icon Design",
    "/Users/Matt/Projects/Gov Ready – Design",
    "/Users/Matt/Projects/Growth Recruitment – App Design",
    "/Users/Matt/Projects/World Options – UX Design Review",
    "/Users/Matt/Projects/Intern Finder – Web Design",
];

function makeSearchResult(resultHtml, isHighlighted) {
    var el = document.createElement('div');
    el.className = 'demo-search-result-row';
    if (isHighlighted) {
        el.className += ' highlighted';
    }

    var leftEl = document.createElement('div');
    var rightEl = document.createElement('div');

    var img = document.createElement('img');
    img.src = './folder-native.png';

    leftEl.appendChild(img);

    el.appendChild(leftEl);
    el.appendChild(rightEl);

    var textEl = document.createElement('div');
    textEl.innerHTML = resultHtml;
    rightEl.appendChild(textEl);

    return el;
}

function stampDemo(searchText, results) {
    var searchField = document.getElementById('js-demo-textfield');
    
    var hasSearchText = !!searchText;
    var searchFieldContent = searchText || 'Search…';
    
    if (!hasSearchText) {
        searchField.className = 'placeholder-style'
        searchField.innerHTML = '<span class="i-beam"></span>' + searchFieldContent;
    } else {
        searchField.className = '';
        searchField.innerHTML = searchFieldContent + '<span class="i-beam"></span>'
    }

    var searchResultsContainer = document.getElementById('js-demo-results');
    searchResultsContainer.innerHTML = '';

    results.forEach(function (result, index) {
        var isHighlighted = index === 0;
        var resultEl = makeSearchResult(result, isHighlighted);
        searchResultsContainer.appendChild(resultEl);
    })
}

function makeSearchResultRowHtml(pattern) {
    var matchingResults = ALL_RESULTS.filter(function (s) {
        return s.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
    }).slice(0, 5);

    var withHtml = matchingResults.map(function (result) {
        var matchStart = result.toLowerCase().indexOf(pattern.toLowerCase());

        var beforeMatch = result.slice(0, matchStart);
        var match = result.slice(matchStart, matchStart + pattern.length);
        
        var afterMatchStart = matchStart + pattern.length;
        var afterMatch = result.slice(afterMatchStart, result.length);

        var html = '' + beforeMatch
            + '<span class="demo-match">' + match + '</span>'
            + afterMatch;

        return html;
    });

    return withHtml
}

function performSearch(pattern) {
    var searchResultRowHtml = makeSearchResultRowHtml(pattern);
    stampDemo(pattern, searchResultRowHtml);
}

function performHighlightedRowChange(currentRow, targetRow, onCompletion) {
    var searchResultEls = document.querySelectorAll('.demo-search-result-row');

    if (searchResultEls.length <= 1) {
        return onCompletion();
    }

    for (var i = 0; i < searchResultEls.length; i++) {
        var el = searchResultEls[i];
        
        if (i === currentRow && !el.classList.contains('highlighted')) {
            el.classList.add('highlighted')
        } else {
            el.classList.remove('highlighted')
        }
    }

    if (currentRow >= targetRow) {
        return onCompletion();
    }

    var timeout = Math.random() * 750;
    if (timeout < 200) timeout = 200;
    if (timeout > 600) timeout = 600;


    setTimeout(function() {
        performHighlightedRowChange(currentRow + 1, targetRow, onCompletion)
    }, timeout)
}

function getTargetRowIndexForHighlightChange() {
    var searchResultEls = document.querySelectorAll('.demo-search-result-row');
    if (!searchResultEls.length) return 0;

    return Math.floor(Math.random() * (searchResultEls.length))
}

function runSearchDemo(text, lastSearchEndIndex, onCompletion) {
    if (lastSearchEndIndex >= text.length + 1) {
        var targetRow = getTargetRowIndexForHighlightChange();

        setTimeout(function() {
            performHighlightedRowChange(1, targetRow, function() {
                setTimeout(onCompletion, 1000);
            })
        }, 300)
        

        return;
    }

    var pattern = text.slice(0, lastSearchEndIndex);
    performSearch(pattern);

    var timeout = Math.random() * 300;

    if (timeout < 100) {
        timeout = 200;
    }

    if (!pattern) {
        timeout = Math.random() * 2000;
    }

    setTimeout(function() {
        runSearchDemo(text, lastSearchEndIndex + 1, onCompletion);
    }, timeout)
}

var DEMO_SEARCHES = [
    'blog',
    'design',
    'podcast',
    'fy22',
    'book',
    'downloads',
];

performSearch('');

var demoSearchIndex = -1;

var JSDemoEl = document.getElementById('js-demo');
var JSDemoWindowParentEl = document.getElementById('js-demo-window-parent')
var InitialJSDemoHtml = JSDemoEl.innerHTML;
var InitialJSDemoWindowParentHtml = JSDemoWindowParentEl.innerHTML;

function runNextSearchDemo() {
    demoSearchIndex++;
    
    if (demoSearchIndex === DEMO_SEARCHES.length) {
        demoSearchIndex = 0;
    }

    JSDemoWindowParentEl.innerHTML = '';
    
    setTimeout(function() {
        JSDemoWindowParentEl.innerHTML = InitialJSDemoWindowParentHtml;
        runSearchDemo(DEMO_SEARCHES[demoSearchIndex], 0, runNextSearchDemo)
    }, 1000)
}

runNextSearchDemo();