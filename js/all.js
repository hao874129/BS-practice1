$(document).ready(function () {
  $('.favorite-icon i').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('bold');
  });

  $('[data-toggle="tooltip"]').tooltip();

  // Modal 事件
  $('#removeModal').on('show.bs.modal', function (event) {
    var a = $(event.relatedTarget) // 選則當初觸發事件的按鈕
    var title = a.data('title') // 使用 data-* 來取得特定內容
    var modal = $(this)
    modal.find('.modal-title').text('確認' + title) // 寫入資料
  })
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })









});

