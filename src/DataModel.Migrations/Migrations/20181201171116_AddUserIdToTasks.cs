using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DataModel.Migrations.Migrations
{
    public partial class AddUserIdToTasks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "TaskTypes",
                nullable: false,
                defaultValue: 1);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "LifeTasks",
                nullable: false,
                defaultValue: 1);

            migrationBuilder.CreateIndex(
                name: "IX_TaskTypes_UserId",
                table: "TaskTypes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_LifeTasks_UserId",
                table: "LifeTasks",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_LifeTasks_AspNetUsers_UserId",
                table: "LifeTasks",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TaskTypes_AspNetUsers_UserId",
                table: "TaskTypes",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LifeTasks_AspNetUsers_UserId",
                table: "LifeTasks");

            migrationBuilder.DropForeignKey(
                name: "FK_TaskTypes_AspNetUsers_UserId",
                table: "TaskTypes");

            migrationBuilder.DropIndex(
                name: "IX_TaskTypes_UserId",
                table: "TaskTypes");

            migrationBuilder.DropIndex(
                name: "IX_LifeTasks_UserId",
                table: "LifeTasks");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "TaskTypes");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "LifeTasks");
        }
    }
}
