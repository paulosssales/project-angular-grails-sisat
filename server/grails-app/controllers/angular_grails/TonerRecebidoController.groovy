package angular_grails

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class TonerRecebidoController {

    TonerRecebidoService tonerRecebidoService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond tonerRecebidoService.list(params), model:[tonerRecebidoCount: tonerRecebidoService.count()]
    }

    def show(Long id) {
        respond tonerRecebidoService.get(id)
    }

    def save(TonerRecebido tonerRecebido) {
        if (tonerRecebido == null) {
            render status: NOT_FOUND
            return
        }

        try {
            tonerRecebidoService.save(tonerRecebido)
        } catch (ValidationException e) {
            respond tonerRecebido.errors, view:'create'
            return
        }

        respond tonerRecebido, [status: CREATED, view:"show"]
    }

    def update(TonerRecebido tonerRecebido) {
        if (tonerRecebido == null) {
            render status: NOT_FOUND
            return
        }

        try {
            tonerRecebidoService.save(tonerRecebido)
        } catch (ValidationException e) {
            respond tonerRecebido.errors, view:'edit'
            return
        }

        respond tonerRecebido, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        tonerRecebidoService.delete(id)

        render status: NO_CONTENT
    }
}
