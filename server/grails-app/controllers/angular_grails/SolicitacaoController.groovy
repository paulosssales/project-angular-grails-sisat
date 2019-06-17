package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class SolicitacaoController {

    SolicitacaoService solicitacaoService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond solicitacaoService.list(params), model:[solicitacaoCount: solicitacaoService.count()]
    }

    def show(Long id) {
        respond solicitacaoService.get(id)
    }

    def save(Solicitacao solicitacao) {
        if (solicitacao == null) {
            render status: NOT_FOUND
            return
        }

        try {
            solicitacaoService.save(solicitacao)
        } catch (ValidationException e) {
            respond solicitacao.errors, view:'create'
            return
        }

        respond solicitacao, [status: CREATED, view:"show"]
    }

    def update(Solicitacao solicitacao) {
        if (solicitacao == null) {
            render status: NOT_FOUND
            return
        }

        try {
            solicitacaoService.save(solicitacao)
        } catch (ValidationException e) {
            respond solicitacao.errors, view:'edit'
            return
        }

        respond solicitacao, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        solicitacaoService.delete(id)

        render status: NO_CONTENT
    }
}
