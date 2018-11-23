var formalizationModule = {
    vars: {
        groupName: "Documentos",
        docList: [
        ],
        docPattern: "<span cod='__id__' onclick='formalizationModule.capture.upload(this)' class='badge badge-secondary' style='margin-right:5px; margin-bottom:5px; cursor:pointer;'>\
        __doc__</span>",
        docsHtml: "",
        docTypeList: [],
        uploadForDocType: false,
        modulePatternTemplate: '<tr>\
            <td>\
                <table class="form" id="customizedUpload" style="width:auto">\
                    <tbody>\
                        <tr style="display:none" class="group">\
                            <td class="group">__groupName__</td>\
                        </tr>\
                        <tr>\
                            <td style="display:none" class="col0"><div class="btn btn-primary btn-small" data-toggle="modal" data-target="#formalizationModal" >Adicionar</div></td>\
                            <td class="col1">__docsHtml__</td>\
                        </tr>\
                    </tbody>\
                </table>\
            </td>\
        </tr>',
        modulePattern: '',
        buttonsPattern: '<span id="btnsFormalization" style="float:right; margin-top:10px; margin-right:10px">\
            <span class="btn btn-default" onclick="formalizationModule.analisys.showForm()"><icon class="icon icon-list-alt"></icon></span>\
            <span class="btn btn-default" onclick="formalizationModule.analisys.showDocs()"><icon class="icon icon-picture"></icon></span>\
            <span class="btn btn-default"  onclick="formalizationModule.analisys.showSplit()"><icon class="icon icon-indent-right" ></icon></span>\
            <span class="btn btn-default"><icon class="icon icon-time" ></icon></span>\
        </span>',
        modal: '<div id="formalizationModal" class="modal hide fade" style="width: 300px !important;margin-left: 25% !important;">\
        <div class="modal-header">\
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
          <h3>Adicionar Documento</h3>\
        </div>\
        <div class="modal-body">\
            <label>Nome</label>\
            <input type="text" style="width:250px"></input>\
        </div>\
        <div class="modal-footer">\
          <span class="btn" data-dismiss="modal">Fechar</span>\
          <span class="btn btn-primary" onclick="formalizationModule.capture.modalSave()">Salvar</span>\
        </div>\
      </div>',
        historyTaskPattern: '\
        <div class="task">\
            <i class="icon-chevron-down" onclick="formalizationModule.analisys.history.showDocs(this)"></i>\
            <i class="icon-chevron-up" onclick="formalizationModule.analisys.history.hideDocs(this)" style="display:none"></i>\
            <b>Etapa: </b> __etapa__ <b>Status: </b> __statusTask__ <b>Autor:</b> __autorTask__ <b>Data:</b> __dataInicioTask__ - __dataFimTask__\
            <div class="document" style="margin-left:17px;display:none">\
                <b>Documentos</b>\
                __documentContent__\
                <br>\
                </p>\
            </div>\
        </div>',
        historyDocumentPattern:
            '<span>\
                    <br>\
                    <i class="icon-chevron-down" onclick="formalizationModule.analisys.history.showChecklist(this)"></i>\
                    <i class="icon-chevron-up" onclick="formalizationModule.analisys.history.hideChecklist(this)" style="display:none"></i>\
                    <a  href="__diretorioFile__" target="_blank" ><b>__document__: </b></a>__status__\
                    <div class="checklist" style="margin-left:17px; display:none">\
                        __checklistContent__\
                    </div>\
                </span>',
        historyChecklistPattern: '<b>Criterio:</b> __criteria__ <span class="label label-__sucessImportant__"><i class="icon-__iconCheck__-sign icon-white" style="vertical-align: bottom;"></i></span><br>',
        historyCommentPattern: '<b style="margin-left:17px">Comentario:</b> __comment__<br>',
        modalhistory: '<div style="width:auto" id="historicoModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
        <h3 id="myModalLabel">Historico</h3>\
      </div>\
      <div class="modal-body">\
        __historyContent__\
      </div>\
      <div class="modal-footer">\
        <button class="btn" data-dismiss="modal" aria-hidden="true">Fechar</button>\
      </div>\
    </div>',
        modalComment: '<div style="width:auto" id="CommentModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
        <h3 id="myModalLabel">Comentário</h3>\
      </div>\
      <div class="modal-body">\
            <input type="hidden" id="inpIndexCriteria" />\
        <br><b>Criterio:</b> <p style="display:inline-block" id="criteriaComment"></p>\
          <br><b>Comentar:</b><br><textarea id="txtComment" style="width:100%"></textarea>\
            <p>\
      <div class="modal-footer">\
        <button class="btn" data-dismiss="modal" aria-hidden="true">Fechar</button>\
        <button id="btnSaveComment" class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Salvar</button>\
      </div>\
    </div>',
        modal41: '<div class="modal fade" id="formalizationModal" tabindex="-1" role="dialog" aria-labelledby="formalizarionModalLabel" aria-hidden="true">\
        <div class="modal-dialog " role="document">\
          <div class="modal-content">\
            <div class="modal-header">\
              <h5 class="modal-title" id="formalizationModalLabel">Incluir documento</h5>\
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                <span aria-hidden="true">&times;</span>\
              </button>\
            </div>\
            <div class="modal-body">\
            <label>Nome</label>\
            <input type="text"></input>\
            </div>\
            <div class="modal-footer">\
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>\
              <button type="button" class="btn btn-primary">Salvar</button>\
            </div>\
          </div>\
        </div>\
      </div>',
        analisysContentBody:
            '<div class="container" id="docContent" style="display:none">\
        <!-- Container principal para imagem -->\
        <div class="" style="float:left;width:70%">\
                <div class="imageContent">\
                    <div class="row groupFileManager" style="text-align: -webkit-center;margin-left:0px !important">\
                        <span style="margin-left:auto;margin-right:auto">\
                                <span class="btn btn-light" onclick=\'img.zoomRotate(this, "", "in")\'><i class="icon-zoom-in"></i></span>\
                                <span class="btn btn-light" onclick=\'img.zoomRotate(this, "", "out")\'><i class="icon-zoom-out"></i></span>\
                                <span class="btn btn-light" onclick=\'img.zoomRotate(this, "left", "")\'><i class="icon-repeat" style="transform: scale(-1,1)"></i></span>\
                                <span class="btn btn-light" onclick=\'img.zoomRotate(this, "right", "")\'><i class="icon-repeat"></i></span>\
                                <span class="btn btn-light" onclick=\'img.autoFocus(this)\'>Focus</span>\
                                <span class="btn btn-light" onclick=\'img.areaFocus(this)\'>Area</span>\
                            </span>\
                    </div>\
                    <div class="row" id="divImgClone" style="overflow:auto;position:absolute; width:180px; height:80px;overflow:hidden;border-radius:4px;z-index:1;display:none;">\
                        <canvas class="image imageClone"></canvas>\
                    </div>\
                    <div class="row" style=" text-align:center; margin-left:0px !important;  background-color: lightgray;;overflow:auto; border: solid thin #dddddd; margin-top:7px">\
                        <canvas class=\'image imageDefault\' style="margin-left:auto;margin-right:auto;background-color: gray;"></canvas>\
						<embed class="plugin" src="" style="display:none;" >\
                    </div>\
                </div>\
                </div>\
                <div class="" style="float:left;width:30%;">\
                <div class="tabbable"> <!-- Only required for left/right tabs -->\
                <ul class="nav nav-tabs">\
                  <li class="active"><a href="#tab1" data-toggle="tab"><icon class="icon icon-list"></icon></a></li>\
                  <li style="display:none"><a href="#tab2" data-toggle="tab"><icon class="icon icon-check"></icon></a></li>\
                </ul>\
                <div class="tab-content">\
                  <div class="tab-pane active" id="tab1">\
                    <div style="margin-left:10px">\
                       __filesForViewer__\
                    </div>\
                  </div>\
                  <div class="tab-pane" id="tab2">\
                  </div>\
				  <div class="tab-pane" id="tab3">\
				  <p>Historico</p>\
                  </div>\
                </div>\
              </div>\
                </div>\
        </div>\
    </div>',
        fileForViewerPattern:
            '<div><p style="cursor:pointer" fileviewer="__indexFile__" codfile="__codfile__" filedirectory="__fileDirectory__">__fileName__</p>\
            <div style="margin-left:10px; display:none" checkviewer="__indexFile__">\
                    <p class="criteria" index="0" approved="true" comment="" style="cursor:pointer">Legivel\
            <span class= "label label-default removeCriteria"> <i class="icon-remove-sign icon-white"></i></span></icon>\
            <span class="label label-default commentCriteria"><i class="icon-comment icon-white"></i></span></p>\
                    <p class="criteria" index="1" approved="true" comment="" style="cursor:pointer">Validade\
            <span class= "label label-default removeCriteria"> <i class="icon-remove-sign icon-white"></i></span></icon>\
            <span class="label label-default commentCriteria"><i class="icon-comment icon-white"></i></span></p>\
        </div></div>'
    },
    capture: {
        buildDocsHtml: function () {
            formalizationModule.vars.docsHtml = '';
            $.each(formalizationModule.vars.docList, function (i, e) {
                formalizationModule.vars.docsHtml += formalizationModule.vars.docPattern.replace('__doc__', this.Nome)
                    .replace(/__id__/g, this.id);
            });
            formalizationModule.vars.modulePattern = formalizationModule.vars.modulePatternTemplate;
            formalizationModule.vars.modulePattern =
                formalizationModule.vars.modulePattern.replace('__docsHtml__', formalizationModule.vars.docsHtml)
                    .replace('__groupName__', formalizationModule.vars.groupName);
        },
        appendModule: function () {
            // TODO é necessário incluir um conteiner antes pra poder limpar dentro dele apenas? ou coloc um class no module pattern?
            var formExecute = $('#ContainerAttach');
            var customUpload = formExecute.find('#customizedUpload');

            if (customUpload.length > 0) {
                customUpload[0].parentNode.removeChild(customUpload[0]);
            }

            //formExecute.append(formalizationModule.vars.modulePattern);
            $(formalizationModule.vars.modulePattern).insertAfter("#ContainerAttach .box-header");

            //if (formExecute.find('#customizedUpload').length === 0) {
            //	formExecute.append(formalizationModule.vars.modulePattern);
            //}

            if ($('#formalizationModal').length > 0) {
                return;
            }
            $('.content>.row-fluid:first').append(formalizationModule.vars.modal);

        },
        upload: function (e) {
            var cod = $(e)[0].getAttribute('cod');
            if ($('#customizedUpload span.badge[cod=' + cod + ']').length > 0) {
                if (!$(e).hasClass('badge-success') && $('#customizedUpload span.badge[cod=' + cod + ']').attr('show') !== 'n') {
                    $('#customizedUpload span.badge').removeClass('last');
                    $(e).addClass('last');
                    formalizationModule.vars.uploadForDocType = true;
                    var docType = $(e)[0].innerText.split('>')[0].trim();
                    uploadFiles(docType);
                } else {
                    formalizationModule.capture.showUpload(cod);
                }
            }
        },
        modalSave: function () {
            var name = $('#formalizationModal input').val();
            this.addDoc(name, true);
        },
        addDoc: function (name, added) {
            var id = ++$('#customizedUpload .col1').children().length;
            if (!isEmpty(name)) {
                $('#customizedUpload .col1').append(formalizationModule.vars.docPattern.replace('__id__', id).replace('__doc__', name));
                $('#formalizationModal input').val('');
                $('#formalizationModal').modal('hide');
                if (added) {
                    $('#customizedUpload .col1 span:last')
                        .attr('added', 'true')
                        .append('<div>  <span class="icon-minus-sign" onclick="formalizationModule.capture.removeDoc(' + id + ')"></span></div>');
                }
            }
        },
        removeDoc: function (id) {
            $('#annex #tblNewFile .filename  a[cod=' + id + ']').closest('tr').find('.delFile').trigger('click');
            if ($('#annex #tblNewFile .filename  a[cod=' + id + ']').length === 0) {
                $('#customizedUpload .col1 span[cod=' + id + ']').remove();
            }
        },
        init: function () {

        },
        uploadChange: function () {

            var targetNode = $('#annex')[0];

            if (!targetNode) {
                return;
            }

            var observerOptions = {
                childList: true,
                attributes: false,
                subtree: true
            };

            var observer = new MutationObserver(function (m) {
                if ($('.last').length > 0) {
                    var cod = $('.last')[0].getAttribute('cod');
                    if (m[0].addedNodes.length > 0) {
                        if (!formalizationModule.vars.uploadForDocType)
                            return;

                        $('#tblNewFile .filename a:last').attr('cod', cod);
                        $('#customizedUpload span[cod=' + cod + ']').find('.icon-remove').parent().remove();
                        $('#customizedUpload span[cod=' + cod + ']').removeClass('badge-secondary').addClass('badge-success');
                        $('#customizedUpload span[cod=' + cod + ']').append('<div>   <span class="icon-remove" onclick="formalizationModule.capture.removeUpload(' + cod + ')"></span></div>');
                    } else if (m[0].removedNodes.length > 0) {
                        cod = $(m[0].removedNodes[0].cells[2]).find('a').attr('cod');
                        $('#customizedUpload span[cod=' + cod + ']').removeClass('badge-success').addClass('badge-secondary');
                        $('#customizedUpload span[cod=' + cod + ']').find('.icon-remove').parent().remove();
                    }
                }
                formalizationModule.vars.uploadForDocType = false;
            });

            observer.observe(targetNode, observerOptions);

        },
        showUpload: function (cod) {
            if ($('#customizedUpload span.badge[cod=' + cod + ']').attr('show') !== 'n') {
                $('#annex #tblNewFile .filename  a[cod=' + cod + ']').trigger('click');
            }
            $('#customizedUpload span.badge[cod=' + cod + ']').removeAttr('show');
        },
        removeUpload: function (cod) {

            $('#customizedUpload span.badge').removeClass('last');
            $('#customizedUpload span.badge[cod=' + cod + ']').addClass('last').attr('show', 'n');

            var r = $('#annex #tblNewFile .filename  a[cod=' + cod + ']').closest('tr').find('.delFile').trigger('click');
        },
        buildModal: function () {

            if ($('#uploadModal').length > 0) {
                return;
            }

            $('body form').append(
                '<div id="uploadModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\
                  <div class="modal-dialog modal-lg">\
                    <div class="modal-content">\
                    </div>\
                  </div>\
                </div>');
            $(document).find('head').append('<style type="text/css">.modal{left:5% !important;width:90% !important;margin-left:0 !important}</style>');
        },
        validateFilesImported: function () {
            for (var j = 0; j < $('#customizedUpload .badge').length; j++) {

                for (var i = 0; i < $('#tblNewFile [name=inpDsFileName]').length; i++) {
                    if ($('#tblNewFile [name=inpDsFileName]')[i].value.split(';')[5].trim() === '')
                        continue;

                    if ($('#tblNewFile [name=inpDsFileName]')[i].value.split(';')[5].trim() === $('#customizedUpload .badge')[j].innerText.trim()) {
                        var cod = $($('#customizedUpload .badge')[j]).attr('cod');
                        $($('#tblNewFile .filename a')[i]).attr('cod', cod);
                        $('#customizedUpload span[cod=' + cod + ']').find('.icon-remove').parent().remove();
                        $('#customizedUpload span[cod=' + cod + ']').removeClass('badge-secondary').addClass('badge-success');
                        $('#customizedUpload span[cod=' + cod + ']').append('<div>   <span class="icon-remove" onclick="formalizationModule.capture.removeUpload(' + cod + ')"></span></div>');
                    }
                }

                for (var k = 0; k < formalizationModule.vars.docTypeList.length; k++) {
                    if ($('#customizedUpload .badge')[j].innerText.trim() === formalizationModule.vars.docTypeList[k].docType) {
                        formalizationModule.vars.docTypeList.splice(k, 1);
                        break;
                    }
                }
            }

            for (var l = 0; l < formalizationModule.vars.docTypeList.length; l++) {
                var fileImported = false;
                for (var m = 0; m < $('#tblNewFile [name=inpDsFileName]').length; m++) {
                    if ($($('#tblNewFile .filename a')[m]).attr('cod') === formalizationModule.vars.docTypeList[l].cod)
                        fileImported = true;
                }
                if (fileImported)
                    delFile($($('#annex #tblNewFile .filename  a[cod=' + formalizationModule.vars.docTypeList[l].cod + ']').closest('tr').find('.delFile'))[0]);
            }


        },
        populateDocTypeList: function () {
            formalizationModule.vars.docTypeList = [];
            for (var i = 0; i < $('#customizedUpload .badge').length; i++) {
                formalizationModule.vars.docTypeList.push({ docType: $('#customizedUpload .badge')[i].innerText.trim(), cod: $($('#customizedUpload .badge')[i]).attr('cod') });
            }
        },
        load: function () {
            //$('#ContainerAttach').hide();
            this.init();
            this.buildDocsHtml();
            this.appendModule();
            this.uploadChange();
            this.buildModal();
            this.validateFilesImported();
            this.populateDocTypeList();
        },
        uploadValidation: function () {
            var r = true;
            $.each($('#customizedUpload span.badge'),
                function () {
                    if ($(this).find('.icon-minus-sign').length == 0) {
                        if ($(this).hasClass('badge-secondary')) { r = false };
                    }
                })
            return r;
        }

    },
    analisys: {
        load: function () {
            this.loadButtons();
            this.buttonClick();
            this.htmlDocBuild();
            this.buildHistory();
            $('.content').append(formalizationModule.vars.modalComment);

        },
        loadButtons: function () {
            //$('#ContainerForm .box-header h2').css('float', 'left');
            $('#ContainerForm').prepend(formalizationModule.vars.buttonsPattern);
        },
        buttonClick: function (el) {
            $('#btnsFormalization .btn').click(function () {
                $('#btnsFormalization .btn').attr('class', 'btn btn-default');
                $(this).removeClass('btn-default').addClass('btn-primary');
            });
            $('#btnFinish').click(this.saveHistory);
        },
        showDocs: function () {
            $('#FrmExecute').hide();
            $('#docContent').show().css('width', '100%');
            $('.imageContent').parent().css('width', '70%');
            $('.tabbable').show();
            $('icon.icon.icon-list-alt').removeClass('icon-white');
            $('icon.icon.icon-picture').addClass('icon-white');
            $('icon.icon.icon-indent-right').removeClass('icon-white');
            this.docsInit();
        },
        showForm: function () {
            $('#FrmExecute').show();
            $('#FrmExecute').attr('width', '95%')
            $('#docContent').hide();
            $('icon.icon.icon-list-alt').addClass('icon-white')
            $('icon.icon.icon-picture').removeClass('icon-white')
            $('icon.icon.icon-indent-right').removeClass('icon-white')
        },
        showSplit: function () {
            $('#FrmExecute').show();
            $('#ContainerForm').addClass('row');
            $($('#ContainerForm')[0]).css('margin-left', '0px');
            $('#docContent').show();
            $('#FrmExecute').attr('width', '30%').css('float', 'left');
            $('#docContent').css('width', '65%').css('float', 'right');
            $('.tabbable').hide();
            $('.imageContent').parent().css('width', '100%');
            $('icon.icon.icon-list-alt').removeClass('icon-white');
            $('icon.icon.icon-picture').removeClass('icon-white');
            $('icon.icon.icon-indent-right').addClass('icon-white');
            this.docsInit();
        },
        docsInit: function () {
            if (img.imageDefaultSrc.trim() == "" && $('div[checkviewer]').length > 0) {
                img.imageDefaultSrc = $($('p[fileviewer]')[0]).attr('filedirectory');
                img.init('.imageContent .imageDefault');
                $($('div[checkviewer]')[0]).show();
            }
        },
        htmlDocBuild: function () {
            var analisysContentBody = formalizationModule.vars.analisysContentBody;
            var attachedFiles = this.getAttachedFiles();

            var fileForViewContent = '';
            $.each(attachedFiles, function (i, file) {
                fileForViewContent += formalizationModule.vars.fileForViewerPattern;
                fileForViewContent = fileForViewContent.replace('__indexFile__', i);
                fileForViewContent = fileForViewContent.replace('__indexFile__', i);
                fileForViewContent = fileForViewContent.replace('__fileName__', file.DocType);
                fileForViewContent = fileForViewContent.replace('__codfile__', file.CodFile);
                fileForViewContent = fileForViewContent.replace('__fileDirectory__', file.Directory);
            });

            analisysContentBody = analisysContentBody.replace('__filesForViewer__', fileForViewContent);
            $('#BoxFrmExecute').append(analisysContentBody);
        },
        getAttachedFiles: function () {
            var files = [];
            $.each($('#tblFile tbody tr'), function (i, row) {
                files.push({
                    DocType: $(row).find('.docType').html(),
                    Directory: $(row).find('.filename a').attr('href'),
                    CodFile: $(row).attr('data-id')
                });
            });
            return files;
        },
        saveHistory: function () {
            var codFlowExecute = document.getElementById('inpCodFlowExecuteTask');
            var codFile = document.getElementById('inpCodFlowExecuteTask');
            var dsCriteria = document.getElementById('inpCodFlowExecuteTask');
            var stApproved = document.getElementById('inpCodFlowExecuteTask');
            //var codFlowExecute = document.getElementById('inpCodFlowExecuteTask');

            //var data = { CodFlowExecute:  }
        },
        requestHistory: function () {

            var codFlowExecute = document.getElementById('inpCodFlowExecute').value;
            var codFlowExecuteTask = document.getElementById('inpCodFlowExecuteTask').value;
            var token = document.getElementById('inpToken').value;

            return $.ajax({
                url: '../Applications/api-formalization-unicred/api/history/' + codFlowExecute + '/' + codFlowExecuteTask,
                method: 'GET',
                headers: { 'Authorization': token }
            });

        },
        buildHistory: function () {
            var historyContent = '';
            this.requestHistory()
                .then(function (history, textStatus, xhr) {

                    var taskContent = '';
                    $.each(history, function (iTask, task) {
                        taskContent += formalizationModule.vars.historyTaskPattern;
                        taskContent = taskContent.replace('__etapa__', task.Etapa);
                        taskContent = taskContent.replace('__statusTask__', task.Status);
                        taskContent = taskContent.replace('__autorTask__', task.Autor);
                        taskContent = taskContent.replace('__dataInicioTask__', task.DataInicio);
                        taskContent = taskContent.replace('__dataFimTask__', task.DataFim);

                        var documentContent = '';
                        $.each(task.Documentos, function (iDocument, document) {
                            documentContent += formalizationModule.vars.historyDocumentPattern;
                            documentContent = documentContent.replace('__document__', document.Nome);
                            documentContent = documentContent.replace('__diretorioFile__', document.Diretorio);

                            var approved = true;
                            var checklistContent = '';
                            $.each(document.Criterios, function (iCheck, check) {
                                checklistContent += formalizationModule.vars.historyChecklistPattern;
                                checklistContent = checklistContent.replace('__criteria__', check.Nome);
                                checklistContent = checklistContent.replace('__iconCheck__', check.Approved ? 'ok' : 'remove');
                                checklistContent = checklistContent.replace('__sucessImportant__', check.Approved ? 'success' : 'important');

                                if (check.Comentario !== '') {
                                    var commentContent = formalizationModule.vars.historyCommentPattern;
                                    commentContent = commentContent.replace('__comment__', check.Comentario);

                                    checklistContent += commentContent;
                                }

                                if (!check.Approved)
                                    approved = false;
                            });

                            documentContent = documentContent.replace('__status__', !document.Criterios.length ? 'Capturado' : approved ? 'Aprovado' : 'Reprovado');
                            documentContent = documentContent.replace('__checklistContent__', checklistContent);
                        });

                        taskContent = taskContent.replace('__documentContent__', documentContent);
                    });

                    historyContent = formalizationModule.vars.modalhistory.replace('__historyContent__', taskContent);

                    $('.content').append(historyContent);
                },
                    function (erro) {
                        // exceção da cadeia de promessas
                        console.log(erro);
                    });
        },
        history: {
            showDocs: function (t) {
                debugger;
                $(t).parent().find('.icon-chevron-down').first().hide();
                $(t).parent().find('.icon-chevron-up').first().show();
                $(t).parent().find('.document').show();
                //$('.task[taskId='+taskId+'] .document').show();
            },
            showChecklist: function (t) {
                debugger;
                $(t).parent().find('.icon-chevron-down').hide();
                $(t).parent().find('.icon-chevron-up').show();
                $(t).parent().find('.checklist').show();
                //$('.task[taskId='+taskId+'] .document .checklist').show();
            },
            hideDocs: function (t) {
                debugger;
                $(t).parent().find('.icon-chevron-down').first().show();
                $(t).parent().find('.icon-chevron-up').first().hide();
                $(t).parent().find('.document').hide();
                //$('.task[taskId='+taskId+'] .document').show();
            },
            hideChecklist: function (t) {
                debugger;
                $(t).parent().find('.icon-chevron-down').show();
                $(t).parent().find('.icon-chevron-up').hide();
                $(t).parent().find('.checklist').hide();
                //$('.task[taskId='+taskId+'] .document .checklist').show();
            }
        },
        ecmModule: function () {
            //todo - Verificar como implemetar regra de documentos obrigatorios
            var tokemPermanente = 'vcMSbDWqyMNu8fcVLol8l0dZ0DZhinIFKyydHCBSAb%2b5RloWjteXNY9345MIcbUQ';
            var userLogin;

            "use strict";

            // classes convertidas de ES6 para compatibilidade com IE11 pelo babel

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var EcmController = function () {
                function EcmController(apiUrl) {
                    _classCallCheck(this, EcmController);

                    Object.defineProperties(this, {
                        _apiUrl: {
                            value: apiUrl
                        },
                        _importModule: {
                            value: null,
                            writable: true
                        },
                        _searchModule: {
                            value: null,
                            writable: true
                        },
                        _userLogin: {
                            value: null,
                            writable: true
                        }
                    });
                    Object.seal(this);
                }
                //RECUPERAR TOKEN DO USUARIO (GET)
                _createClass(EcmController, [{
                    key: "getUserLogin",

                    value: function getUserLogin() {
                        var _this = this;
                        if (this._userLogin) {
                            return this._userLogin;
                        }
                        var identityUser = $('#inpToken').val();
                        var apiUrl = this._apiUrl;
                        this._userLogin = $.ajax({
                            url: apiUrl + "/getToken",
                            dataType: "json",
                            type: 'GET',
                            async: true,
                            data: {
                                identityUser: identityUser
                            }

                        }).then(function (userLoginResult) {
                            _this._userLogin = userLoginResult;
                            return _this._userLogin;
                        }, function (error) {
                            alert('Erro ao recuperar usuario : ' + '\n' + error.statusText + '\n' + error.responseText);
                        });
                        return this._userLogin;
                    }

                    //MODULO DE IMPORTACAO ECM (POST)
                }, {
                    key: "getImportModuleAsync",
                    value: function getImportModuleAsync(params) {

                        if (this._importModule) {
                            return this._importModule;
                        }

                        var _this = this;

                        return this._ajax(this._apiUrl, 'POST', ['getprotocol'], true, params)
                            .then(function (importModuleResult) {
                                _this._importModule = importModuleResult;
                                return _this._importModule;
                            }, function () {
                                alert('Erro na integração: ' + '\n' + error.statusText + '\n' + error.responseText);
                            });

                    }
                    //MODULO DE PESQUISA ECM (POST)

                }, {
                    key: "getSearchModuleAsync",
                    value: function getSearchModuleAsync(params) {
                        var _this = this;

                        if (this._searchModule) {
                            return this._searchModule;
                        }
                        return this._ajax(this._apiUrl, 'POST', ['getsearchprotocol'], true, params)
                            .then(function (searchModuleResult) {
                                _this._searchModule = searchModuleResult;
                                return _this._searchModule;
                            });
                    }
                }, {
                    key: "_ajax",
                    value: function _ajax(url, type, arrparam, _async, data) {
                        var obj = {
                            url: url + arrparam.join('/'),
                            type: type,
                            async: _async,
                            dataType: "json",
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify(data)
                        };
                        return $.ajax(obj).then(function (result) {
                            return result;
                        }, function (error) {
                            alert('Erro na integração : ' + '\n' + error.statusText + '\n' + error.responseText);
                        });
                    }
                }]);
                return EcmController;
            }();

            var ecmControle = new EcmController('/admissao/api/v1/ecm/');

            $(document).ready(function () {
                'use strict';

                var EcmUI = function () {
                    function EcmUI(hasSearchModule, hasImportModule, instanceTaskAlias, codFlowExecute, form, ecmController) {

                        _classCallCheck(this, EcmUI);

                        Object.defineProperties(this, {
                            _ecmController: {
                                value: ecmController
                            },
                            _hasSearchModule: {
                                value: hasSearchModule,
                                writable: true
                            },
                            _hasImportModule: {
                                value: hasImportModule,
                                writable: true
                            },
                            _instanceTaskAlias: {
                                value: instanceTaskAlias,
                                writable: true
                            },
                            _codFlowExecute: {
                                value: codFlowExecute,
                                writable: true
                            },
                            _userLogin: {
                                value: null,
                                writable: true
                            },
                            _form: {
                                value: form
                            }
                        });

                        Object.seal(this);

                        var _this = this;
                        this._ecmController.getUserLogin()
                            .then(function (userLogin) {
                                _this.userLogin = userLogin;
                            });

                    }

                    _createClass(EcmUI, [{
                        key: 'limparAnexos',
                        value: function limparAnexos() {
                            $('div#ContainerAttach div.box-header h2').html('Documentos');
                            $('#div-reorder-attachments').remove();
                            $('#ContainerAttach button.btn.btn-primary.btn-small').hide();

                            // Durante tarefas
                            if (window.location.href.indexOf('wfflow_execute') < 0 || !HasImportModule) {
                                $('#annex').html('');
                            }
                        }
                        //MODULO DE PESQUISA
                    }, {
                        key: 'buildSearchModule',
                        value: function buildSearchModule() {
                            if (!this._hasSearchModule) {
                                return;
                            }
                            var params = this._buildSearchModuleParams();
                            return this._ecmController.getSearchModuleAsync(params)
                                .then(function (data) {
                                    var html = null;
                                    html = '<div id="divEcmSearch" style="width: 100%; height: 100%;">';
                                    html += '<iframe id="iframeSearch" src="' + data.replace('/ssl', '') + '" scrolling="no" style="width: 100%; height: inherit; border: none !important;"></iframe>';
                                    html += '</div>';
                                    var moduleContainer = $('#docContent');
                                    moduleContainer.append(html);
                                    moduleContainer.find('iframe').ready(function (evento) { });
                                    //$('#iframeSearch').contents().find('#buttonVersion').after('<div id="buttonChecklist" class="tab" title="Alt+Shift+4" style="margin-right:-34px;margin-top: 253px;z-index:-1;background-position: 0px -77px;"><div id="checklist-tab" class="button"></div></div>');

                                }, function (error) {
                                    console.log(error);
                                });
                        }
                    }, {
                        key: '_buildSearchModuleParams',
                        value: function _buildSearchModuleParams() {
                            var guid = this._form.guid.val();
                            var params = null;
                            this._codFlowExecute = codFlowExecute;

                            var _this = this;

                            params = {
                                "adHocUser": _this._userLogin,
                                "moduleOptions": {
                                    "ShowHeader": false,
                                    "ShowFloatMenu": false,
                                    "OpenHeader": false,
                                    "OpenFloat": false,
                                    "ViewerTarget": "_self"
                                },
                                "fields": [{
                                    "Name": "CodFlowExecute",
                                    "Visible": false,
                                    "Required": false,
                                    "Enabled": true,
                                    "Value": 7
                                }],
                                "resultFields": []
                            };

                            return params;
                        }
                        //MODULO DE IMPORTACAO

                    }, {
                        key: 'buildImportModule',
                        value: function buildImportModule() {

                            if (!this._hasImportModule) {
                                return;
                            }
                            var botao = $('#ContainerAttach button.btn.btn-primary.btn-small');
                            botao.html('<i class="icon-upload icon-white"></i> Importar');
                            botao.attr('onclick', '');
                            botao.show();

                            if (this._instanceTaskAlias != 'T01') {
                                botao.prop('disabled', false);
                                botao.removeAttr('title');
                            }
                            var _this = this;

                            botao.on('click', function () {
                                var params = _this._buildImportModuleParams();

                                $.when(_this._ecmController.getImportModuleAsync(params))
                                    .then(function (data) {
                                        var url = data.replace('/ssl', '');

                                        //$('.view').html('<iframe src="'+url+'" style="width: -webkit-fill-available;height: -webkit-fill-available;"></iframe>')
                                        $.colorbox({
                                            href: url,
                                            iframe: true,
                                            innerWidth: '90%',
                                            innerHeight: '90%',
                                            scrolling: true,
                                            onClosed: _this._colorboxCloseHandler
                                        });
                                    }, function (error) {
                                        console.log(error);
                                    });

                            });
                        }
                    }, {
                        key: '_buildImportModuleParams',
                        value: function _buildImportModuleParams() {
                            var _this = this;

                            var buildParameters = {
                                adHocUser: _this._userLogin,
                                eventName: 'smlimported',
                                fields: [{
                                    Name: 'GUID',
                                    Visible: false,
                                    Required: false,
                                    Enabled: true,
                                    Value: _this._form.guid.val()
                                }, {
                                    Name: 'CPF',
                                    Visible: false,
                                    Required: false,
                                    Enabled: true,
                                    Value: _this._form.cpfDoContratado.val()
                                }, {
                                    Name: 'Empresa',
                                    Visible: false,
                                    Required: false,
                                    Enabled: true,
                                    Value: _this._form.empresa.val()
                                }, {
                                    Name: 'NomeColaborador',
                                    Visible: false,
                                    Required: false,
                                    Enabled: true,
                                    Value: _this._form.nomeDoContratado.val()
                                }]
                            };

                            if (taskAlias != 'T01') {
                                buildParameters.fields.push({
                                    Name: 'CodFlowExecute',
                                    Visible: false,
                                    Required: false,
                                    Enabled: true,
                                    Value: _this._codFlowExecute
                                });
                            }
                            return buildParameters;
                        }
                    }, {
                        key: '_colorboxCloseHandler',
                        value: function _colorboxCloseHandler(evento) {
                            var searchAddress = $('#divEcmSearch>iframe').attr('src');
                            $('#divEcmSearch>iframe').attr('src', searchAddress);
                        }
                    }, {
                        key: 'userLogin',
                        set: function set(userLogin) {
                            this._userLogin = userLogin;
                            this.limparAnexos();
                            this.buildSearchModule();
                            //this.buildImportModule();
                        }
                    }]);

                    return EcmUI;
                }();


                var taskAlias = $('#inpDsFlowElementAlias').val();
                var tasks = ['T01', 'T02', 'T06', 'T03', 'T05'];
                var HasImportModule = tasks.indexOf(taskAlias) >= 0;
                var codFlowExecute = $('#inpCodFlowExecute').val();
                //CONSTRUTO ECMUI INTEGRAÇÃO (PARAMENTRO DE NECESSARIOS PARA INTEGRACAO)
                var ecmUI = new EcmUI(
                    true,
                    HasImportModule,
                    taskAlias,
                    codFlowExecute, {
                        guid: $('inp:guid'),
                        cpfDoContratado: $('inp:cpfDoContratado'),
                        empresa: $('inp:empresa'),
                        nomeDoContratado: $('inp:nomeDoContratado')
                    },
                    ecmControle
                );
            });
        }
    }
};
//$('window').load(function(){
window.onload = function () {

    $('p[fileviewer]').click(function () {
        var obj = $(this);
        img.imageDefaultSrc = obj.attr('filedirectory');
        img.init('.imageContent .imageDefault');

        obj.parent('div').find('div[checkviewer=' + obj.attr('fileviewer') + ']').show();
        $.each($('div[checkviewer]'), function (i, check) {
            if ($(check).attr('checkviewer') !== obj.attr('fileviewer'))
                $(check).hide();
        });
    });

    $('.commentCriteria').click(function () {
        $('#CommentModal').modal('toggle');
        $('#CommentModal .modal-body p').first().show();
        $('#txtComment').val($(this).parent('.criteria').attr('comment'));
        $('#criteriaComment').text($(this).parent('.criteria').text().trim());
        $('#inpIndexCriteria').val($(this).parent('.criteria').attr('index'));
        $('#CommentModal').css('width', '');

    });
    $('.icon.icon-time').parent('span').click(function () {
        $('#historicoModal').modal('toggle');
        $('.task').show();
        $('#historicoModal').css('width', 'auto');
    });
    $('.removeCriteria').click(function () {
        if ($(this).parent('p').attr('approved') === 'true') {
            $(this).parent('p').attr('approved', 'false');
            $(this).attr('class', 'label label-important removeCriteria');
        } else {
            $(this).parent('p').attr('approved', 'true');
            $(this).attr('class', 'label label-default removeCriteria');
        }
    });
    $('#btnSaveComment').click(function () {
        var criteria = $('.criteria[index=' + $('#inpIndexCriteria').val() + ']');
        if ($('#txtComment').val() === '')
            criteria.find('.commentCriteria').attr('class', 'label label-default commentCriteria');
        else
            criteria.find('.commentCriteria').attr('class', 'label label-info commentCriteria');

        criteria.attr('comment', $('#txtComment').val());
    });

    $('#div11568').text('André de Sousa Viana');
    $('#div11567').text('Brasileiro');


};