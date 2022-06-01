package com.springdemo.hellow.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import com.springdemo.hellow.model.Problem;
import com.springdemo.hellow.model.User;
import com.springdemo.hellow.repository.Views;
import com.springdemo.hellow.requests.ProblemRequest;
import com.springdemo.hellow.requests.UserRequest;
import com.springdemo.hellow.services.ProblemGetService;
import com.springdemo.hellow.services.ProblemService;
import com.springdemo.hellow.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@JsonView
@RestController
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
//@CrossOrigin(origins = ["http://localhost:3000"], allowCredentials = "true")
@RequestMapping(value = "/problem")
public class ProblemController {
    @Autowired
    private ProblemService problemService;
    @Autowired
    private UserService userService;

    public ProblemController(ProblemGetService problemGetService) {
    }


    @PostMapping(value = "/create")
    public void create(ProblemRequest problem) {
        problemService.create(problem);
    }

    @PostMapping(value = "/get_user_id")
    @JsonView(Views.UserIdResponseViews.class)
    public User get_user_id(UserRequest userRequest) {
        return userService.get_user_id(userRequest.getBarcode());
    }


    @GetMapping("/get_all_problems/{id}")
    @JsonView({Views.MyResponseViews.class})
    public List<Problem> getProblemsByUser(@PathVariable("id") long userId){
        return problemService.getProblemsByUserId(userId);
    }

    @GetMapping("deleteProblem/{id}")
    public void deleteProblem(@PathVariable("id")Long id) {
        problemService.deleteProblem(id);
    }

    @PostMapping("updatePost/{id}")
    public void updateProblem(@PathVariable("id")Long id, Problem inProblem) {
        inProblem.setProblemId(id);
        problemService.updateProblem(inProblem);
    }
}