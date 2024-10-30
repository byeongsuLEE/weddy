package com.example.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MyController ***REMOVED***
    @GetMapping("/my")
    @ResponseBody
    public String myAPI() ***REMOVED***
        return "my route";
    ***REMOVED***
***REMOVED***
