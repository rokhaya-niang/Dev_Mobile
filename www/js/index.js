<<<<<<< HEAD
function ajouterTache() {
    const task = document.getElementById("task");
    const taskListInProgress = document.getElementById('taskListInProgress');
    const taskListDone = document.getElementById('taskListDone');

    if (task.value) {
        // Créer un nouvel élément de tâche
        let newItem = document.createElement('li');
        newItem.innerHTML = task.value;

        // Ajouter l'élément à la liste des tâches en cours
        taskListInProgress.appendChild(newItem);

        // Ajouter un gestionnaire d'événement pour swiperight (marquer comme terminé)
        $(newItem).on('swiperight', function (e) {
            taskListDone.appendChild(this);
        });

        // Ajouter un gestionnaire d'événement pour swipeleft (supprimer la tâche)
        $(newItem).on('swipeleft', function (e) {
            $(this).hide('slow', function() {
                $(this).remove();
            });
        });

        // Rafraîchir les vues de liste
        $(taskListInProgress).listview('refresh');
        $(taskListDone).listview('refresh');
    }

    // Réinitialiser la valeur du champ de saisie et redonner le focus
    task.value = '';
    task.focus();
}

function reinitialiserListe() {
    // Réinitialiser les listes des tâches en cours et des tâches terminées
    const taskListInProgress = document.getElementById('taskListInProgress');
    const taskListDone = document.getElementById('taskListDone');
    const task = document.getElementById("task");

    task.value = '';
    taskListInProgress.innerHTML = '';
    taskListDone.innerHTML = '';
    task.focus();
}
=======
$(document).on('pagecreate', '#main-page', function() {
    $('#add-task-btn').on('click', function() {
        let taskText = $('#task-input').val();
        if (taskText) {
            let taskItem = $('<li>' + taskText + '</li>');
            taskItem.on('swipeleft', function() {
                $(this).hide('slow', function() {
                    $(this).remove();
                });
            });
            taskItem.on('swiperight', function() {
                $(this).toggleClass('completed');
            });
            $('#task-list').append(taskItem).listview('refresh');
            $('#task-input').val('');
        }
    });

    $('#reset-btn').on('click', function() {
        $('#task-list').empty().listview('refresh');
    });
});
>>>>>>> d21bea93ef5f6ed720f5d45de8ff92585bc68085
