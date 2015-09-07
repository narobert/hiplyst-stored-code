function startDrag() {

    var dropZones = document.querySelectorAll('.drop-target');
    var dragElements = document.querySelectorAll('#drag-elements tr');
    var elementDragged = null;

    for (var i = 0; i < dragElements.length; i++) {

        // Event Listener for when the drag interaction starts.
        dragElements[i].addEventListener('dragstart', function(e) {
            e.dataTransfer.effectAllowed = 'move';
            var dragImage = document.createElement("img");
            dragImage.setAttribute("src", "/static/images/record.png");
            e.dataTransfer.setDragImage(dragImage, 0, 0);
            e.dataTransfer.setData('text', this.getAttribute("data-all"));
            elementDragged = this;
        });

        // Event Listener for when the drag interaction finishes.
        dragElements[i].addEventListener('dragend', function(e) {
            elementDragged = null;
        });

    };

    for (var i = 0; i < dropZones.length; i++) {

        // Event Listener for when the dragged element is over the drop zone.
        dropZones[i].addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            this.style.backgroundColor = "#f9f9f9";
        });

        // Event Listener for when the dragged element enters the drop zone.
        dropZones[i].addEventListener('dragenter', function(e) {
            this.style.backgroundColor = "#f9f9f9";
        });

        // Event Listener for when the dragged element enters the drop zone.
        dropZones[i].addEventListener('dragleave', function(e) {
            this.style.backgroundColor = "white";
        });

        // Event Listener for when the dragged element dropped in the drop zone.
        dropZones[i].addEventListener('drop', function(e) {
            if (e.preventDefault) e.preventDefault(); 
            if (e.stopPropagation) e.stopPropagation(); 

            this.style.backgroundColor = "white";
            var trackStr = e.dataTransfer.getData('text').split("^");
            document.getElementById("playlist_id").value = this.getAttribute("playlist_id");
            document.getElementById("track_url").value = trackStr[0];
            document.getElementById("track_aid").value = trackStr[1];
            document.getElementById("track_title").value = trackStr[2];
            document.getElementById("track_artist").value = trackStr[3];
            document.getElementById("track_duration").value = trackStr[4];
            document.getElementById("track_genre").value = trackStr[5];

            $.ajax({
                url: $('#add_track_form').attr('action'),
                type: $('#add_track_form').attr('method'),
                data: $('#add_track_form').serialize(),
                success: function(data) {
                    // Track added to playlist
                },
                error: function() {
                    alert("Something wrong!");
                }
            });

        });

    };

}
