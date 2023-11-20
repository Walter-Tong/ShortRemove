const filter = () => {
    setTimeout(() => {
        let elements = document.getElementsByTagName('ytd-rich-section-renderer');

        if (elements.length > 0) {
            let firstElement = elements[0];
            firstElement.remove();
        }
    }, 500)
}

// Callback function to be executed when mutations are observed
function mutationCallback(mutationsList, observer) {
    for (var mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // New nodes have been added to the DOM (loading state)
            filter();
            break;
        }
    }
}

// Create a new MutationObserver
var observer = new MutationObserver(mutationCallback);

// Start observing changes in the DOM
observer.observe(document, { childList: true, subtree: true });

// Call the filterElements function initially
filter();