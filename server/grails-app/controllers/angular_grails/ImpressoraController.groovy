package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class ImpressoraController {

    ImpressoraService impressoraService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond impressoraService.list(params), model:[impressoraCount: impressoraService.count()]
    }

    def show(Long id) {
        respond impressoraService.get(id)
    }

    def save(Impressora impressora) {
        if (impressora == null) {
            render status: NOT_FOUND
            return
        }

        try {
            impressoraService.save(impressora)
        } catch (ValidationException e) {
            respond impressora.errors, view:'create'
            return
        }

        respond impressora, [status: CREATED, view:"show"]
    }

    def update(Impressora impressora) {
        if (impressora == null) {
            render status: NOT_FOUND
            return
        }

        try {
            impressoraService.save(impressora)
        } catch (ValidationException e) {
            respond impressora.errors, view:'edit'
            return
        }

        respond impressora, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        impressoraService.delete(id)

        render status: NO_CONTENT
    }
}
