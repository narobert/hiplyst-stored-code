function startDrag() {

    var dropZones = document.querySelectorAll('#drop-target');
    var dragElements = document.querySelectorAll('#drag-elements tr');
    var elementDragged = null;

    for (var i = 0; i < dragElements.length; i++) {

        // Event Listener for when the drag interaction starts.
        dragElements[i].addEventListener('dragstart', function(e) {
            e.dataTransfer.effectAllowed = 'move';
            this.className = "striped_tr";
            document.querySelector('.menu_playlists_separator').className = "striped_menu_playlists_separator";
            e.dataTransfer.setData('text', this.getAttribute("data-all"));
            elementDragged = this;
        });

        // Event Listener for when the drag interaction finishes.
        dragElements[i].addEventListener('dragend', function(e) {
            this.className = "";
            document.querySelector('.striped_menu_playlists_separator').className = "menu_playlists_separator";
            elementDragged = null;
        });

    };

    for (var i = 0; i < dropZones.length; i++) {

        // Event Listener for when the dragged element is over the drop zone.
        dropZones[i].addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            this.style.color = "#ff4000";
        });

        // Event Listener for when the dragged element enters the drop zone.
        dropZones[i].addEventListener('dragenter', function(e) {
            this.style.color = "#ff4000";
        });

        // Event Listener for when the dragged element enters the drop zone.
        dropZones[i].addEventListener('dragleave', function(e) {
            this.style.color = "#41658c";
        });

        // Event Listener for when the dragged element dropped in the drop zone.
        dropZones[i].addEventListener('drop', function(e) {
            if (e.preventDefault) e.preventDefault(); 
            if (e.stopPropagation) e.stopPropagation(); 

            this.style.color = "#41658c";
            this.innerHTML = e.dataTransfer.getData('text');
        });

    };

}
