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
                    // Track added successfully
                },
                error: function() {
                    alert("Something wrong!");
                }
            });

        });

    };

}
