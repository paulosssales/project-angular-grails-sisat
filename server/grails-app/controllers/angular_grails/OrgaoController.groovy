package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class OrgaoController {

    OrgaoService orgaoService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond orgaoService.list(params), model:[orgaoCount: orgaoService.count()]
    }

    def show(Long id) {
        respond orgaoService.get(id)
    }

    def save(Orgao orgao) {
        if (orgao == null) {
            render status: NOT_FOUND
            return
        }

        try {
            orgaoService.save(orgao)
        } catch (ValidationException e) {
            respond orgao.errors, view:'create'
            return
        }

        respond orgao, [status: CREATED, view:"show"]
    }

    def update(Orgao orgao) {
        if (orgao == null) {
            render status: NOT_FOUND
            return
        }

        try {
            orgaoService.save(orgao)
        } catch (ValidationException e) {
            respond orgao.errors, view:'edit'
            return
        }

        respond orgao, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        orgaoService.delete(id)

        render status: NO_CONTENT
    }
}
