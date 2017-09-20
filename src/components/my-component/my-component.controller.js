export default function MyComponentController() {
    var vm = this;

    vm.componentMessage = 'This comes from my component';
    vm.updateMessage = updateMessage;

    function updateMessage(value) {
        vm.componentMessage = value;
    }
}
