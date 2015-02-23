module.exports = {

    // The browser is ready to execute tests.
    READY: 1,

    // The browser is executing the tests/
    EXECUTING: 2,

    // The browser is not executing, but temporarily disconnected (waiting for reconnecting).
    READY_DISCONNECTED: 3,

    // The browser is executing the tests, but temporarily disconnect (waiting for reconnecting).
    EXECUTING_DISCONNECTED: 4,

    // The browser got permanently disconnected (being removed from the collection and destroyed).
    DISCONNECTED: 5,

    // The browser is preparing to launch or may be enqueued if a concurrent browser llimit has been set.
    PENDING: 6

};