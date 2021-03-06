﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Docs.Domain.Interfaces.IManagers;
using Docs.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DocsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
	    private IRoleManager _roleManager;

	    public RolesController(IRoleManager roleManager)
	    {
		    _roleManager = roleManager;
	    }

	    [HttpGet("GetAllRoles")]
	    public async Task<IActionResult> GetAllRoles()
	    {
            try
            {
                var roles = await _roleManager.GetAllAsync();

                if (roles == null)
                    return NotFound();

                return Ok(roles);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

	    [HttpGet("GetRoleById/{id}")]
	    public async Task<IActionResult> GetRoleById(int id)
	    {
		    if (id <= 0)
		    {
			    return BadRequest("The given Id is not valid. Id must be greater than 0");
		    }

            try
		    {
			    var role = await _roleManager.GetAsync(x => x.Id == id);

			    if (role == null)
				    return NotFound();

			    return Ok(role);
		    }
		    catch (Exception ex)
		    {
			    return StatusCode(500, ex.Message);
		    }
	    }


        [HttpPost("CreateRole")]
	    public async Task<IActionResult> CreateRole(Role role)
	    {
            if (ModelState.IsValid == false)
                return BadRequest("Invalid data");

            try
            {
                await _roleManager.CreateAsync(role);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

	    [HttpPut("UpdateRole")]
	    public async Task<IActionResult> UpdateRole(Role role)
	    {
            if (ModelState.IsValid == false)
                return BadRequest("Invalid data");

            try
            {
                var updatedRole = await _roleManager.UpdateAsync(role);

                if (updatedRole == null)
                    return NotFound();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

	    [HttpDelete("DeleteRole/{id}")]
	    public async Task<IActionResult> DeleteRole(int id)
	    {
            if (id <= 0)
                return BadRequest("Not a valid id!");

            try
            {
                await _roleManager.DeleteAsync(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
	}
}