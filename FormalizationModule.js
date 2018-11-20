var formalizationModule = {
    vars: {
        groupName: "Documentos",
        docList: [{
            "id": "1",
            "Nome": "RG + CPF"
        }
        ],
        docPattern: "<span cod='__id__' onclick='formalizationModule.capture.upload(this)' class='badge badge-secondary' style='margin-right:5px; margin-bottom:5px; cursor:pointer;'>\
        __doc__</span><input cod='__id__' label='Documento __doc__' required='S' style='display:none'>",
        // <input cod='__id__' style='display:none' type='file'></input>",
        docsHtml: "",
        modulePattern: '<tr>\
            <td>\
                <table class="form" id="customizedUpload">\
                    <tbody>\
                        <tr class="group" style="display:none">\
                            <td class="group" style="display:none">__groupName__</td>\
                        </tr>\
                        <tr>\
                            <td class="col0" style="display:none"><div class="btn btn-primary btn-small" data-toggle="modal" data-target="#formalizationModal" >Adicionar</div></td>\
                            <td class="col1">__docsHtml__</td>\
                        </tr>\
                    </tbody>\
                </table>\
            </td>\
        </tr>',
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
        modalHistorico: '<div style="width:auto" id="historicoModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
        <h3 id="myModalLabel">Historico</h3>\
      </div>\
      <div class="modal-body">\
        <p>\
          <br><b>Criterio:</b> Ilegivel\
          <br><b>Comentar:</b><br><textarea style="width:100%"></textarea>\
        </p>\
        <p>\
        \
        <div class="task" taskId="1">\
            <i class="icon-chevron-down" onclick="formalizationModule.analisys.history.showDocs(this)"></i>\
            <i class="icon-chevron-up" onclick="formalizationModule.analisys.history.hideDocs(this)" style="display:none"></i>\
            <b>Etapa: </b> T01 - Inicio <b>Status: </b> Concluido <b>Autor:</b> Rafael Carvalho <b>Data:</b> 15/11/18 10:35 - 16/11/18 11:05\
            <div class="document" style="margin-left:17px;display:none">\
                <b>Documentos</b>\
                <span>\
                    <br>\
                    <i class="icon-chevron-down" onclick="formalizationModule.analisys.history.showChecklist(this)"></i>\
                    <i class="icon-chevron-up" onclick="formalizationModule.analisys.history.hideChecklist(this)" style="display:none"></i>\
                    <a  href="../Applications/images/Especificação Técnica-V4.pdf" target="_blank" ><b>RG: </b></a>Reprovado\
                    <div class="checklist" style="margin-left:17px; display:none">\
                        <b>Criterio:</b> Legivel <span class="label label-success"><i class="icon-ok-sign icon-white" style="vertical-align: bottom;"></i></span>\
                        <br><b>Criterio:</b> Validade <span class="label label-important"><i class="icon-remove-sign icon-white" style="vertical-align: bottom;"></i></span>\
                        <br><b style="margin-left:17px">Comentario:</b> RG Vencido\
                    </div>\
                </span>\
                <span>\
                    <br>\
                    <i class="icon-chevron-down" onclick="formalizationModule.analisys.history.showChecklist(this)"></i>\
                    <i class="icon-chevron-up" onclick="formalizationModule.analisys.history.hideChecklist(this)" style="display:none"></i>\
                    <a  href="/document/preview/capturar?c=eaBKhIga%2ffDNREtMIWHjblwb3kO9lnJ3ziYngyeXd8w9Z65F4Das0K9gdCoNEtZ7" target="_blank" ><b>CPF: </b></a>Aprovado\
                    <div class="checklist" style="margin-left:17px; display:none">\
                        <b>Criterio:</b> Legivel <span class="label label-success"><i class="icon-ok-sign icon-white" style="vertical-align: bottom;"></i></span>\
                        <br><b>Criterio:</b> Validade <span class="label label-success"><i class="icon-ok-sign icon-white" style="vertical-align: bottom;"></i></span>\
                    </div>\
                </span>\
                <br>\
                </p>\
            </div>\
        </div>\
        <hr>\
        \
        \
        \
        <div style="display:none"><p>\
        <br><b>Criterio:</b> Ilegivel\
        <br><b>Comentario:</b> Não foi possivel a leitura dos numeros do RG\
        <br><b>Autor:</b> Rafael Carvalho\
        </p>\
        <hr>\
        <p> <b>Documento:</b> RG + CPF\
        <br><b>Criterio:</b> Ilegivel\
        <br><b>Comentario:</b> Não foi possivel a leitura dos numeros do RG\
        <br><b>Autor:</b> Rafael Carvalho\
        </p>\
        <hr>\
        <p> <b>Documento:</b> RG + CPF\
        <br><b>Criterio:</b> Ilegivel\
        <br><b>Comentario:</b> Não foi possivel a leitura dos numeros do RG\
        <br><b>Autor:</b> Rafael Carvalho\
        </p></div>\
      </div>\
      <div class="modal-footer">\
        <button class="btn" data-dismiss="modal" aria-hidden="true">Fechar</button>\
        <button class="btn btn-primary">Salvar</button>\
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
                      <p style="cursor:pointer" id="doc_rg">RG + CPF</p>\
                        <div style="margin-left:10px; display:none" id="check_rg">\
                            <p style="cursor:pointer">Legivel <icon class="icon icon-remove"></icon> <icon class="icon icon-comment"></icon></p>\
                            <p style="cursor:pointer">Validade <icon class="icon icon-remove"></icon> <icon class="icon icon-comment"></p>\
                        </div>\
                      <p style="cursor:pointer" id="doc_comp">Comprovante de Residencia</p>\
                        <div style="margin-left:10px; display:none" id="check_compres">\
                            <p style="cursor:pointer">Legivel <icon class="icon icon-remove"></icon> <icon class="icon icon-comment"></icon></p>\
                            <p style="cursor:pointer">Ultimos 3 meses <icon class="icon icon-remove"></icon> <icon class="icon icon-comment"></p>\
                        </div>\
                      <p style="cursor:pointer" id="doc_cert">Certidão de Nascimento</p>\
                        <div style="margin-left:10px; display:none" id="check_cert">\
                            <p style="cursor:pointer">Legivel <icon class="icon icon-remove"></icon> <icon class="icon icon-comment"></icon></p>\
                        </div>\
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
    </div>'
    },
    capture: {
        buildDocsHtml: function () {
            $.each(formalizationModule.vars.docList, function (i, e) {
                formalizationModule.vars.docsHtml += formalizationModule.vars.docPattern.replace(/__doc__/g, this.Nome)
                    .replace(/__id__/g, this.id);
            })
            formalizationModule.vars.modulePattern =
                formalizationModule.vars.modulePattern.replace('__docsHtml__', formalizationModule.vars.docsHtml)
                    .replace('__groupName__', formalizationModule.vars.groupName);
        },
        appendModule: function () {
            $('#ContainerAttach').append(formalizationModule.vars.modulePattern);
            //$('.content>.row-fluid:first').append(formalizationModule.vars.modal);

        },
        upload: function (e) {
            var cod = $(e)[0].getAttribute('cod');
            if ($('#customizedUpload span.badge[cod=' + cod + ']').length > 0) {
                if (!$(e).hasClass('badge-success') && $('#customizedUpload span.badge[cod=' + cod + ']').attr('show') != 'n') {
                    $('#customizedUpload span.badge').removeClass('last')
                    $(e).addClass('last');
                    $('#annex [type=button]').trigger('click')
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
                $('#customizedUpload .col1').append(formalizationModule.vars.docPattern.replace('__id__', id).replace('__doc__', name).replace("<input cod='__id__' label='Documento __doc__' required='S' style='display:none'>", ''))
                $('#formalizationModal input').val('');
                $('#formalizationModal').modal('hide');
                if (added) {
                    $('#customizedUpload .col1 span:last').attr('added', 'true').append('<div>  <span class="icon-minus-sign" onclick="formalizationModule.capture.removeDoc(' + id + ')"></span></div>')
                }
            }
        },
        removeDoc: function (id) {
            $('#annex #tblNewFile .filename  a[cod=' + id + ']').closest('tr').find('.delFile').trigger('click');
            if ($('#annex #tblNewFile .filename  a[cod=' + id + ']').length == 0) {
                $('#customizedUpload .col1 span[cod=' + id + ']').remove();
            };
        },
        init: function () {
            $('#ContainerAttach #annex').hide();
            //$('#ContainerAttach').hide();
            //var sendAction = $('#BtnSend').attr('onclick');
            //$('#BtnSend').removeAttr('onclick');

        },
        uploadChange: function () {
            var targetNode = $('#annex')[0];
            var observerOptions = {
                childList: true,
                attributes: false,
                subtree: true //Omit or set to false to observe only changes to the parent node.
            }
            var observer = new MutationObserver(function (m) {
                if ($('.last').length > 0) {
                    var cod = $('.last')[0].getAttribute('cod')
                    if (m[0].addedNodes.length > 0) {
                        $('#tblNewFile .filename a:last').attr('cod', cod);
                        $('#customizedUpload span[cod=' + cod + ']').removeClass('badge-secondary').addClass('badge-success');
                        $('#customizedUpload input[cod=' + cod + ']').attr('required', 'N');
                        $('#customizedUpload span[cod=' + cod + ']').append('<div>   <span class="icon-remove" onclick="formalizationModule.capture.removeUpload(' + cod + ')"></span></div>')
                    } else if (m[0].removedNodes.length > 0) {
                        $('#customizedUpload span[cod=' + cod + ']').removeClass('badge-success').addClass('badge-secondary');
                        $('#customizedUpload input[cod=' + cod + ']')[0].setAttribute('required', 'S');
                        $('#customizedUpload span[cod=' + cod + ']').find('.icon-remove').parent().remove();
                    }
                }
            });
            observer.observe(targetNode, observerOptions);

        },
        showUpload: function (cod) {
            if ($('#customizedUpload span.badge[cod=' + cod + ']').attr('show') != 'n') {
                $('#annex #tblNewFile .filename  a[cod=' + cod + ']').trigger('click');
                //$('#uploadModal').modal();
                //$('#uploadModal .modal-content').append(
                //    '<embed src="' + $('input[cod="' + cod + '"]').val() + '" type="application/pdf" width="100%" height="100%">'
                //)
            };
            $('#customizedUpload span.badge[cod=' + cod + ']').removeAttr('show');
        },
        removeUpload: function (cod) {

            $('#customizedUpload span.badge').removeClass('last')
            $('#customizedUpload span.badge[cod=' + cod + ']').addClass('last').attr('show', 'n');
            //var cod = $(e).attr(cod);

            var r = $('#annex #tblNewFile .filename  a[cod=' + cod + ']').closest('tr').find('.delFile').trigger('click')
        },
        buildModal: function () {
            $('body form').append(
                '<div id="uploadModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\
                  <div class="modal-dialog modal-lg">\
                    <div class="modal-content">\
                    </div>\
                  </div>\
                </div>');
            $(document).find('head').append('<style type="text/css">.modal{left:5% !important;width:90% !important;margin-left:0 !important}</style>')
        },
        load: function () {
            //call this method to show capture module.
            this.init();
            this.buildDocsHtml();
            this.appendModule();
            this.uploadChange();
            this.buildModal();
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
            $('.content').append(formalizationModule.vars.modalHistorico);


        },
        loadButtons: function () {
            //$('#ContainerForm .box-header h2').css('float', 'left');
            $('#ContainerForm').prepend(formalizationModule.vars.buttonsPattern);
        },
        buttonClick: function (el) {
            $('#btnsFormalization .btn').click(function () {
                $('#btnsFormalization .btn').attr('class', 'btn btn-default');
                $(this).removeClass('btn-default').addClass('btn-primary');
            })
        },
        showDocs: function () {
            $('#FrmExecute').hide();
            $('#docContent').show().css('width', '100%');
            $('.imageContent').parent().css('width', '70%');
            $('.tabbable').show();
            $('icon.icon.icon-list-alt').removeClass('icon-white');
            $('icon.icon.icon-picture').addClass('icon-white');
            $('icon.icon.icon-indent-right').removeClass('icon-white');
            img.init('.imageContent .imageDefault');
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
            img.init('.imageContent .imageDefault');
        },
        htmlDocBuild: function () {
            $('#BoxFrmExecute').append(formalizationModule.vars.analisysContentBody);

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
}
//$('window').load(function(){
window.onload = function () {
    $('#check_rg').show();
    $('#doc_rg').click(function () {
        img.imageDefaultSrc = "../Applications/images/Especificação Técnica-V4.pdf";
        img.init('.imageContent .imageDefault');
        $('#check_rg').show();
        $('#check_compres').hide();
        $('#check_cert').hide();
    });
    $('#doc_comp').click(function () {
        img.imageDefaultSrc = "http://dev-unicred.orquestrabpm.com.br/document/preview/uploadled-file?c=YE0A0zVE65UWeQcZdZdEzMTZvO2boDCaCDpyk5eCHcLJJJ%2bzYoxm9oPNBnHaL33pGAMlMcq1gEavFC%2bpobtxjf7njDYNI4Ca8Xc3MwIu48CGIMshotkG2K8H35zT7kl5";
        img.init('.imageContent .imageDefault');
        $('#check_compres').show();
        $('#check_rg').hide();
        $('#check_cert').hide();
    });
    $('#doc_cert').click(function () {
        img.imageDefaultSrc = "../Applications/images/CertidaoNascimentoGray.jpg";
        img.init('.imageContent .imageDefault');
        $('#check_compres').hide();
        $('#check_rg').hide();
        $('#check_cert').show();
    });

    $('.icon.icon-comment').click(function () {
        $('#historicoModal').modal('toggle');
        $('#myModalLabel').html('Comentar');
        $('#historicoModal .modal-body p').first().show();
        $('.task').hide();
        $('#historicoModal').css('width', '')

    });
    $('.icon.icon-time').click(function () {
        $('#historicoModal').modal('toggle');
        $('#historicoModal .modal-body p').first().hide();
        $('#myModalLabel').html('Historico');
        $('.task').show();
        $('#historicoModal').css('width', 'auto')
    });
    $('#div11568').text('André de Sousa Viana');
    $('#div11567').text('Brasileiro');


}