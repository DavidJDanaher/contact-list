export default function MyComponentController() {
    var vm = this;

    vm.message = '\"Hello from a controller!\"';
    vm.newMessage;
    vm.updateMessage = updateMessage;

    function updateMessage() {
        vm.message = vm.newMessage;
    }
}
