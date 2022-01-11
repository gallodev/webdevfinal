package fit.restapi.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fit.core.IrpfCalculator;
import fit.restapi.view.PersonVm;

@RestController
@RequestMapping("/irpf")
public class IrpfController {
    @PostMapping("/calculate")
    public double calculate(@RequestBody PersonVm person) {
        var irpf = new IrpfCalculator(2021, person.getTotalSalary(), person.getDependentsNumber()).calculate();

        return irpf;
    }
}
